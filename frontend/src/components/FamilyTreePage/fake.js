import fakeData from './fakeData.json';

function getRelatives(userId, previousUserId, selectedPartner = null) {
    const findUserById = (id) => fakeData[id];
    const isActive = (status) => status === "ACTIVE";

    const user = findUserById(userId);
    if (!user) return [];
    console.log("User", user);
    // Determine the selected partner
    let partnerId = selectedPartner || user.partners?.current;
    if (!partnerId || partnerId == undefined) {
        if (user.partners?.partners?.length) {
            partnerId = user.partners?.partners[user.partners?.partners?.length - 1]?.id;
        }
    }
    console.log("PartnerId", partnerId);
    const partner = partnerId ? findUserById(partnerId) : null;
    // Find the index of the current partner
    const currentPartnerIndex = user.partners?.partners?.findIndex(partner => partner.id === partnerId);

    // Determine previous and next partner IDs
    const previousPartnerId = currentPartnerIndex > 0 ? user.partners?.partners[currentPartnerIndex - 1].id : null;
    const nextPartnerId = currentPartnerIndex < user.partners?.partners?.length - 1 ? user.partners?.partners[currentPartnerIndex + 1].id : null;

    // Build the result array
    let relatives = [];

    // Helper function to format users for the output
    const formatUser = (userData, fid = null, mid = null, pid = null) => {
        const { father, mother, siblings, partners, children, ...rest } = userData; // Remove unwanted fields
        return { id: userData.id, fid, mid, pids: pid ? [pid] : [], ...rest };
    };

    let parents = [];

    if (isActive(user.father?.status)) {
        const father = findUserById(user.father.id);
        if (father) {
            parents.push(formatUser(father, null, null, user.mother?.id || null));
        }
    }

    if (isActive(user.mother?.status)) {
        const mother = findUserById(user.mother.id);
        if (mother) {
            parents.push(formatUser(mother, null, null, user.father?.id || null));
        }
    }

    const isUserMale = user.gender == 'Male';

    let _siblings = [];

    if (user.siblings?.length) {
        user.siblings
            .forEach(sibling => {
                const siblingUser = findUserById(sibling.id);
                _siblings.push(formatUser(siblingUser, user.father?.id || null, user.mother?.id || null, siblingUser.partners?.current || null));
            });
    }

    _siblings.push({ ...formatUser(user, user.father?.id || null, user.mother?.id || null, partnerId || null), tags: user.id == '1' ? (isUserMale ? ['user-male'] : ['user-female']) : (isUserMale ? ['highlighted-male'] : ['highlighted-female']) });
    _siblings.sort((a, b) => new Date(a.dob) - new Date(b.dob));

    if (partner) {
        const determineTags = () => {
            const genderTag = !isUserMale ? '-male' : '-female';
            if (!previousPartnerId && !nextPartnerId) {
                return ['none' + genderTag];
            } else if (!previousPartnerId) {
                return ['left' + genderTag];
            } else if (!nextPartnerId) {
                return ['right' + genderTag];
            } else {
                return ['middle' + genderTag];
            }
        };

        const formattedUser = formatUser(partner, null, null, user.id || null);
        const tags = determineTags();

        if (isUserMale) {
            _siblings.push({ ...formattedUser, tags });
        } else {
            _siblings.unshift({ ...formattedUser, tags });
        }
    }

    if (partner && user.children?.[partner.id]?.length) {
        user.children[partner.id]
            .filter(child => isActive(child.status))
            .map(child => findUserById(child.id))
            .filter(Boolean)
            .sort((a, b) => new Date(a.dob) - new Date(b.dob))
            .forEach(childUser => {
                relatives.push(formatUser(childUser, childUser.father.id, childUser.mother.id, null));
            });
    }

    // Handle previousUserId logic
    // if (previousUserId) {
    //     const previousUser = findUserById(previousUserId);
    //     if (previousUser) {
    //         const pastPartnerId = previousUser.partners?.current || null;
    //         const pastPartner = pastPartnerId ? findUserById(pastPartnerId) : null;

    //         // Add children from past partners if any
    //         if (pastPartner && user.children?.[pastPartner.id]?.length) {
    //             user.children[pastPartner.id].forEach(child => {
    //                 if (isActive(child.status)) {
    //                     const childUser = findUserById(child.id);
    //                     if (childUser && !relatives.some(r => r.id === childUser.id)) {
    //                         relatives.push(formatUser(childUser, user.id, pastPartner.id, null));
    //                     }
    //                 }
    //             });
    //         }
    //     }
    // }
    relatives = [...parents, ..._siblings, ...relatives];
    console.log("Relatives", previousPartnerId, nextPartnerId);
    console.log("Relatives", relatives);
    return { relatives, previousPartnerId, nextPartnerId };
}

export { getRelatives };
