// 1: Validation Rules
const Validate_Rules = {
    worker_name: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
        errormessage: "invilade worker name"
    },
    worker_profile_image: {
        regex: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        errormessage: "invilade url"
    },
    worker_role: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
        errormessage: "invilade worker role"
    },
    company_name: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
        errormessage: "invilade company name"
    },
    starting_date: {
        regex: /(\d{1,2}(\/|-)\d{1,2}(\/|-)\d{2,4})/,
        errormessage: "invilade starting date name"
    },
    ending_date: {
        regex: /(\d{1,2}(\/|-)\d{1,2}(\/|-)\d{2,4})/,
        errormessage: "invilade ending date name"
    }
};
let staff_experieces = []
let unassigned_staff_list = []
let conferenceRoomWorkers = []
let receptionRoomWorkers = []
let serversRoomWorkers = []
let securityRoomWorkers = []
let workersRoom = []
let Vault_Room = []
const conference_staff_list = document.getElementById("conference_staff_list")
const experiences_field = document.getElementById("experience_details")
const company = document.getElementById("company");
const roleContent = document.getElementById("role_content");
const startingDate = document.getElementById("starting_date");
const endingDate = document.getElementById("ending_date");
const experienceForm = document.getElementById("experience_form");
const addExperienceBtn = document.getElementById("add_experience_btn");
const workerNameInput = document.getElementById("worker_name");
const workerRoleInput = document.getElementById("worker_role");
const workerPhotoUrlInput = document.getElementById("worker_photo_url");
const unassignedStaffList = document.getElementById("unassigned_staff_list");
const workerForm = document.getElementById("worker_form");
const addNewWorkerModal = document.getElementById("add_new_worker_modal");
const experieces = document.getElementById("experieces")
const addWorkerToroom = document.getElementById("addWorkerToroom")
// 1- the modal that make you add new 
document.getElementById("add_new_worker_btn").addEventListener("click", () => {
    addNewWorkerModal.showModal();
});
document.querySelectorAll(".blue_btn").forEach(btn => {
    btn.addEventListener("click", () => {
        addWorkerToroom.style.display = "grid"
        FilterWorkers(btn)
    })
});
addExperienceBtn.addEventListener("click", () => {
    //  1 fonction 5asha tzid another div of experieces
    let experiences_field = document.getElementById("experiences_field")
    let new_experience_details = `  <div id="experience_details" class="bg-[#f3f3f3] mt-5 p-10 rounded-sm grid gap-4">
                    <h2 class="modal_primary_font text-center">Experience</h2>
                    <div class="grid gap-4" id="experiences_container">
                        <label class="modal_label" for="company_name">Company:</label>
                        <input class = "userInputs" name="company_name" type="text" id="company_name">
                     <div class="errormessage" name="company_name"></div>
                        <label class="modal_label" for="worker_role">Role:</label>
                       <input name = "worker_role" class = "userInputs" type="text">
                        <label class="modal_label" for="starting_date">From:</label>
                        <input class = "userInputs" type="date" name="starting_date" id="starting_date">
                     <div class="errormessage" name="starting_date"></div>
                        <label class="modal_label" for="ending_date">To:</label>
                        <input class = "userInputs" type="date" class="modal_label" for="ending_date" name="ending_date">
                     <div class="errormessage" name="ending_date"></div>          
                        </div>
                </div>`
    experiences_field.innerHTML += new_experience_details
});
function Form_validator() {
    let new_worker_inputs = workerForm.querySelectorAll(".userInputs")
    let wronginput = 0;
    new_worker_inputs.forEach(input => {
        let value = input.value.trim()
        let regex = Validate_Rules[input.name].regex
        let errormessage = document.getElementsByClassName("errormessage")[input.name];
        if (!value.match(regex) || Validate_Rules.ending_date > Validate_Rules.starting_date) {
            errormessage.textContent = Validate_Rules[input.name].errormessage
            errormessage.style.color = "red"
            input.style.border = " 3px solid red"
            wronginput++
        } else {
            input.style.border = "3px solid green"
            errormessage.textContent = ""
        }
    });
    return wronginput
}
document.getElementById("worker_form").addEventListener("submit", (e) => {
    e.preventDefault();
    let new_worker_inputs = e.target.querySelectorAll(".userInputs")
    let new_worker = {
    }
    let wronginput = Form_validator();
    if (wronginput > 0) {
        return;
    }
    new_worker_inputs.forEach((input) => {
        new_worker[input.name] = input.value
    });
    unassigned_staff_list.push(new_worker)
    console.log(unassigned_staff_list)
    alert("The form submited with successfully!")
    RenderedStaff()

    workerForm.reset();
    addNewWorkerModal.close();
});

// the fonction that filtre the workers before the display
function FilterWorkers(btn) {

    let workersfiltred = {}
    unassigned_staff_list.array.forEach(staffCard => {
        workersfiltred[staffCard.name] = staffCard.value;
        if (workersfiltred[staffCard.role == "Security"]) {
            securityRoomWorkers.push(workersfiltred)
            conferenceRoomWorkers.push(workersfiltred)
        }
        if (workersfiltred[staffCard.role == "Receptionist"]) {
            receptionRoomWorkers.push(workersfiltred)
            conferenceRoomWorkers.push(workersfiltred)
        }
        if (workersfiltred[staffCard.role == "IT Guy"]) {
            serversRoomWorkers.push(workersfiltred)
            conferenceRoomWorkers.push(workersfiltred)
        }
        if (workersfiltred[staffCard.role == "Other"]) {
            workersRoom.push(workersfiltred)
            conferenceRoomWorkers.push(workersfiltred)
        }
    
    });

    // unassigned_staff_list.array.forEach(staff => {
    //     if()
    //     if(worker_role.value == ){

    //     }
    // });
}

// the fonction that display staff cards
function RenderedStaff() {
    let unassigned_staff_card = ""
    for (let item of unassigned_staff_list) {
        unassigned_staff_card += `
 <div draggabel = true ondragstart="dragstartHandler(event)"  id="staff_card" class="staff_card">
            <div style="background-image: url('/public/white.jpg');" 
                id="staff_profil" 
                class="w-15 h-15 rounded-full border-dashed border border-[#999696] ml-2">
                <img src="${item.worker_profile_image} || '/public/man (1).png'}" 
                     width="100%" class="grid place-content-center" height="100%" 
                     id="staff_card_profil" alt="Staff Profile">
            </div>
            <div class="grid-cols-1">
                <p id="staff_name" class="primary_font">${item.worker_name}</p>
                <p id="staff_role" class="secondry_font">${item.worker_role}</p>
            </div>
            <button id = "delete_btn" class="grid place-content-center delete_btn">X</button>
        </div>
     `;
        unassignedStaffList.innerHTML = unassigned_staff_card;

    }
}
