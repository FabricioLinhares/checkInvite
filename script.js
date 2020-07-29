function checkInviteSystem(test=false) {
    const html = {
        guestName : document.querySelector('input#name'),
        invite : document.querySelector('input#invite'),
        checkButton : document.querySelector('input#check'),
        result : document.querySelector('div#result')
    };

    const invites = {
        existInvite(invite) {
            return Object.keys(this).find(element => element === invite)
        },
        existGuest(invite, guest) {
            if (!this.existInvite(invite)) return false;
            return this[invite].indexOf(guest) !== -1;
        }
    };

    function putGuest(invite, guest) {
        invite = invite.toLowerCase();
        guest = guest.toLowerCase();
        if (typeof(guest) !== 'string') return false;
        if (invites.existGuest(invite,guest)) return false;
        invites[invite].push(guest);
        return true;
    }

    function createInvite(invite, guests=[]) {
        invite = invite.toLowerCase();
        if (!Array.isArray(guests)) return false;
        for (name in guests) {
            if (typeof(guests[name]) !== 'string') return false;
            guests[name] = guests[name].toLowerCase();
        }
        if (invites.existInvite(invite)) return false;
        invites[invite] = guests;
        return true;
    }

    function checkInvite() {
        const invite = html.invite.value.toLowerCase();
        const guestName = html.guestName.value.toLowerCase();
        if (invites.existGuest(invite,guestName)){
            html.result.innerText = 'Você pode entrar';
            return true;
        } else {
            html.result.innerText = 'Você não pode entrar';
            return false;
        }
    }

    function populateTestInvites() {
        console.log('Criando convites temporários para teste...')
        let inviteCount = 0;
        for (let i=1; i <= 5; i++) {
            const inviteName = `Convite ${i}`;
            if (createInvite(inviteName)) {
                console.log(`=-=-= ${inviteName} =-=-=`);
                for (let c=1; c <= 8; c++) {
                    const guestName = `Convidado ${++inviteCount}`;
                    if (putGuest(inviteName, guestName)) {
                        console.log(`${guestName} criado...`);
                    } else {
                        console.log(`Erro ao criar ${guestName}`);
                    }
                }
            } else {
                console.log(` -*-*- Erro ao criar ${inviteName} -*-*-`);
            }
        }
        console.log(invites);
    }

    function init() {
        if (test) populateTestInvites();
        html.checkButton.addEventListener('click',checkInvite);
    }

    return {
        init,
        invites,
        createInvite,
        putGuest
    }
}

// const system = checkInviteSystem(true); // Test Script
const system = checkInviteSystem(); // Default
system.init();