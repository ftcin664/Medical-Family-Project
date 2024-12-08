import { mockData } from './mockData';

// Utility function to abbreviate long names
const formatName = (name) => {
    if (name.length > 9) {
        const [firstName, ...rest] = name.split(' ');
        const lastName = rest.join(' ');
        const initial = lastName.length > 0 ? ` ${lastName[0]}.` : '';
        if (firstName.length > 7) {
            return firstName.substring(0, 7) + "..." + initial;
        }
        return `${firstName}${initial}`;
    }
    return name;
};

function getRelatives(userId, previousUserId, selectedPartner = null) {
    const findUserById = (id) => mockData.find(_user => _user.id === id);
    const user = findUserById(userId);
    if (!user) return [];
    let partnerId = selectedPartner || (user.pids ? user.pids[user.pids.length - 1] : null);
    const partner = partnerId ? findUserById(partnerId) : null;
    const currentPartnerIndex = partnerId && user.pids ? user.pids.findIndex(pid => pid === partnerId) : -1;
    const previousPartnerId = currentPartnerIndex > 0 && user.pids ? user.pids[currentPartnerIndex - 1] : null;
    const nextPartnerId = currentPartnerIndex < (user.pids?.length || 0) - 1 && user.pids ? user.pids[currentPartnerIndex + 1] : null;

    const previousPartner = previousPartnerId ? findUserById(previousPartnerId) : null;
    const nextPartner = nextPartnerId ? findUserById(nextPartnerId) : null;

    let parents = [];
    if (user.fid) {
        const father = findUserById(user.fid);
        if (father) {
            parents.push({ ...father, name: formatName(father.name), tags: ['common-' + father.gender] });
        }
    }

    if (user.mid) {
        const mother = findUserById(user.mid);
        if (mother) {
            parents.push({ ...mother, name: formatName(mother.name), tags: ['common-' + mother.gender] });
        }
    }

    let _siblings = [];
    if (user.mid && user.fid) {
        _siblings = mockData.filter(_user => (_user.mid === user.mid && _user.fid === user.fid) && (_user.id !== user.id)).map(_user => ({ ..._user, name: formatName(_user.name) }));
    }
    _siblings.push({ ...user, name: formatName(user.name), tags: ['highlighted-' + user.gender] });

    _siblings.sort((a, b) => new Date(a.bdate) - new Date(b.bdate));


    let children = [];

    if (partner) {
        const genderOrder = {
            male: 1,
            female: 2,
            nonBinary: 3,
        };
        const compareUser = (a, b) => {
            const genderComparison = (genderOrder[a.gender] || 4) - (genderOrder[b.gender] || 4);
            if (genderComparison !== 0) {
                return genderComparison;
            }

            const dateA = a.bdate ? new Date(a.bdate) : new Date(0);
            const dateB = b.bdate ? new Date(b.bdate) : new Date(0);
            return dateA - dateB;
        }
        const determineTags = () => {
            if (!previousPartnerId && !nextPartnerId) {
                return ['none-' + partner.gender];
            } else if (!previousPartnerId) {
                return ['left-' + partner.gender];
            } else if (!nextPartnerId) {
                return ['right-' + partner.gender];
            } else {
                return ['middle-' + partner.gender];
            }
        }
        if (compareUser(user, partner) < 0) {
            _siblings.push({ ...partner, name: formatName(partner.name), pids: [userId], tags: determineTags() });
        } else {
            _siblings.unshift({ ...partner, name: formatName(partner.name), pids: [userId], tags: determineTags() });
        }
        // if (partner.fid) {
        //     const father = findUserById(partner.fid);
        //     if (father) {
        //         parents.push({ ...father, name: formatName(father.name), tags: ['common-' + father.gender] });
        //     }
        // }
    
        // if (partner.mid) {
        //     const mother = findUserById(partner.mid);
        //     if (mother) {
        //         parents.push({ ...mother, name: formatName(mother.name), tags: ['common-' + mother.gender] });
        //     }
        // }

        children = mockData.filter(_user => (_user.mid === partner.id && _user.fid === user.id) || (_user.fid === partner.id && _user.mid === user.id));
        children.sort((a, b) => new Date(a.bdate) - new Date(b.bdate));
        children = children.map(child => ({ ...child, name: formatName(child.name) }));
    }
    let relatives = [...parents, ..._siblings, ...children];
    console.log("relatives", relatives);
    return { relatives, previousPartnerId, nextPartnerId };
}

export { getRelatives };