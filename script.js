const fetchData = () => {


    setTimeout(() => {
        console.log("profileData starts");

        try {
            var name = document.querySelectorAll('h1.text-heading-xlarge')[0];
            name = name.innerText
        } catch (error) {
            console.log("error for Name => " + error);
        }

        try {
            var location = document.querySelectorAll(".text-body-small.inline.t-black--light.break-words")[0];
            location = location.innerText
        } catch (error) {
            console.log("error for Location => " + error);
        }

        try {
            var company = document.querySelectorAll('.inline-show-more-text.inline-show-more-text--is-collapsed.inline-show-more-text--is-collapsed-with-line-clamp.inline')[0];
            company = company.innerText
        } catch (error) {
            console.log("error for Company => " + error);
        }

        try {
            var designation = document.querySelectorAll('.text-body-medium.break-words')[0];
            designation = designation.innerText
        } catch (error) {
            console.log("error for designation => " + error);
        }

        try {
            var profilePic = document.querySelectorAll('[title="' + name + '"]')[0];
            profilePic = profilePic.src
        } catch (error) {
            console.log("error for Profile Pic => " + error);
        }

        try {
            var skills = document.querySelectorAll('.skill_card_skill_topic> .display-flex.align-items-center > span > span');
            skills = skills.innerText
        } catch (error) {

        }

        try {
            var profileLink = document.location.href
        } catch (error) {
            console.log("error for Profile URL => " + error);
        }

        document.getElementById("top-card-text-details-contact-info").click()

        try {

            var phone = document.querySelectorAll('.pv-contact-info__ci-container.t-14>.t-14.t-black.t-normal')[0];
            phone = phone.innerText

        } catch (error) {
            console.log("error for Phone => " + error);
        }

        try {

            var email = document.querySelectorAll('.pv-contact-info__contact-link.link-without-visited-state.t-14')[0];
            email = email.innerText

        } catch (error) {
            console.log("error for Phone => " + error);
        }

        var profileData = { name, location, company, designation, profilePic, profileLink, phone, email }

        console.log(profileData);
        console.table(profileData);
        // alert("testing")

        navigator.clipboard.writeText(JSON.stringify(profileData))
        alert(JSON.stringify(profileData) + "\n\n\nThe Data has been copied in Clipboard")


        console.log("profileData ends");
    }, 5000);
}

fetchData()



// "*://*.linkedin.com/in/*"