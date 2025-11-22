// Change name of variables and ID
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
    },
    companyNameInexperience: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
        errormessage: "invilade company name"
    },
    workerRoleInexperience: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
        errormessage: "invilade worker role"
    },
};
let staff_experieces = []
let unassigned_staff_list = []
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
const unassignedStaffList = document.getElementById("unassigned_staff_list");
const workerForm = document.getElementById("worker_form");
const addNewWorkerModal = document.getElementById("add_new_worker_modal");
const experieces = document.getElementById("experieces")
let new_experience_details = ""
let worker_photo_url = document.getElementById("worker_photo_url")
let worker_card_profil = document.getElementById("worker_card_profil")
worker_photo_url.addEventListener("input", () => {
    if (worker_photo_url.value) {
        worker_card_profil.src = worker_photo_url.value
        return;
    }
    worker_card_profil.src = "/public/user (1).png"
})
//  for the modal that make you add new worker 
document.getElementById("add_new_worker_btn").addEventListener("click", () => {
    addNewWorkerModal.showModal();
});
// for close the modal that make you add new worker
document.getElementById("closeAddNewWorkerModal").addEventListener("click", () => {
    addNewWorkerModal.close();
    workerForm.reset();
    worker_card_profil.src = ""
    new_experience_details = ""
})
document.querySelectorAll(".add-staff-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const addWorkerToroom = document.getElementById("addWorkerToroom")
        addWorkerToroom.style.display = "flex"
        FilterWorkers(btn)
    })
});
document.getElementById("closeAssignemnetWorkerModal").addEventListener("click", () => {
    addWorkerToroom.style.display = "none"
    console.log(addWorkerToroom)
})
document.getElementById("closeProfileDetalsModal").addEventListener("click", () => {
    workerProfile.style.display = "none"
})
addExperienceBtn.addEventListener("click", () => {
    //  1 fonction 5asha tzid another div of experieces
    let experiences_field = document.getElementById("experiences_field")
    new_experience_details += `  <div id="experience_details" class="bg-[#f3f3f3] mt-5 p-10 rounded-sm grid gap-4">
                    <h2 class="modal_primary_font text-center">Experience</h2>
                    <div class="grid gap-4" id="experiences_container">
                        <label class="modal_label" for="company_name">Company:</label>
                        <input class = "experiencesInputs" name="companyNameInexperience" type="text" id="company_name">
                     <div class="errormessage" name="companyNameInexperience"></div>
                        <label class="modal_label" for="worker_role">Role:</label>
                       <input name = "workerRoleInexperience" class = "experiencesInputs" type="text">
                        <label class="modal_label" for="starting_date">From:</label>
                        <input class = "experiencesInputs" type="date" name="startingDateInexperience" id="starting_date">
                     <div class="errormessage" name="startingDateInexperience"></div>
                        <label class="modal_label" for="ending_date">To:</label>
                        <input class = "experiencesInputs" type="date" class="modal_label" for="ending_date" name="endingDateInexperience">
                     <div class="errormessage" name="endingDateInexperience"></div>          
                        </div>
                </div>`
    experiences_field.innerHTML = new_experience_details
});
// the function that validate user inputs before 
function Form_validator() {
    let new_worker_inputs = workerForm.querySelectorAll(".userInputs")
    let wronginput = 0;
    new_worker_inputs.forEach(input => {
        let value = input.value.trim()
        let regex = Validate_Rules[input.name].regex
        let errormessage = document.querySelector(`[data-field="${input.name}"]`);
        if (!value.match(regex)) {
            if (errormessage) {
                errormessage.textContent = Validate_Rules[input.name].errormessage
                errormessage.style.color = "red"
            }
            input.style.border = "3px solid red"
            wronginput++
        } else {
            input.style.border = "3px solid green"
            if (errormessage) {
                errormessage.textContent = ""
            }
        }
    });
    return wronginput
}
// the function that submit user inputs
document.getElementById("worker_form").addEventListener("submit", (e) => {
    let i = 0;
    e.preventDefault();
    let new_worker_inputs = e.target.querySelectorAll(".userInputs")
    let experiencesInputs = document.querySelectorAll(".experiencesInputs")
    let new_worker = {
        id: GenerateId(),
        experiences: [],
    }
    let experience = {
    }
    console.log(new_worker)
    let wronginput = Form_validator();
    if (wronginput > 0) {
        return;
    }
    new_worker_inputs.forEach((input) => {
        new_worker[input.name] = input.value
    });
    experiencesInputs.forEach(experienceInput => {
        experience[experienceInput.name] = experienceInput.value
        i++;
        if (i === 4) {
            new_worker.experiences.push(experience)
            experience = {
            }
            i = 0;
        }
    });

    unassigned_staff_list.push(new_worker)
    console.log(experiencesInputs)
    addNewWorkerModal.close();
    RenderedWorkersInSidebar()
    workerForm.reset();
});

// the function that filtre the workers before the display
function FilterWorkers(btn) {
    let WhoCanWorks = []
    let RightRoom = btn.closest('.room-card');
    console.log(RightRoom)
    let RightroomId = RightRoom.dataset.room;
    switch (RightroomId) {
        case "conference_room":
            WhoCanWorks = ["IT Guy", "Receptionist", "Security", "Cleaning", "Other", "Manager"];
            break;
        case "reception_room":
            WhoCanWorks = ["Receptionist", "Manager", "Cleaning"];
            break;
        case "servers_room":
            WhoCanWorks = ["IT Guy", "Manager", "Cleaning"];
            break;
        case "security_room":
            WhoCanWorks = ["Security", "Manager", "Cleaning"];
            break;
        case "staff_room":
            WhoCanWorks = ["IT Guy", "Receptionist", "Security", "Cleaning", "Other", "Manager"];
            break;
        case "vault_room":
            WhoCanWorks = ["IT Guy", "Receptionist", "Security", "Other", "Manager"];
            break;
    }
    const addWorkerToroom = document.getElementById("addWorkerToroom")
    const workersListInModal = document.getElementById("workersListInModal")
    let workerCard = ""
    
    unassigned_staff_list.forEach(worker => {
        if (WhoCanWorks.includes(worker.worker_role)) {
            workerCard += `
                <div class="staff-card" onclick="assignWorkerToRoom(${worker.id}, '${RightroomId}')" style="cursor: pointer;">
                    <img src="${worker.worker_profile_image || '/public/man (1).png'}" alt="Staff Profile">
                    <div class="staff-info">
                        <div class="staff-name">${worker.worker_name}</div>
                        <div class="staff-role">${worker.worker_role}</div>
                    </div>
                </div>
            `;
        }
    });
    
    workersListInModal.innerHTML = workerCard || '<div class="empty-state"><i class="fas fa-users-slash"></i><p>No suitable staff available</p></div>';
    return WhoCanWorks;
}

// Function to assign worker to room
function assignWorkerToRoom(workerId, roomId) {
    const worker = unassigned_staff_list.find(w => w.id == workerId);
    if (!worker) return;
    
    // Remove from unassigned list
    const index = unassigned_staff_list.findIndex(w => w.id == workerId);
    unassigned_staff_list.splice(index, 1);
    
    // Add to room
    const roomList = document.getElementById(roomId.replace('_room', '_staff_list') || roomId + '_list');
    if (roomList) {
        const workerCard = `
            <div class="staff-card">
                <img src="${worker.worker_profile_image || '/public/user (1).png'}" alt="Staff Profile">
                <div class="staff-info">
                    <div class="staff-name">${worker.worker_name}</div>
                    <div class="staff-role">${worker.worker_role}</div>
                </div>
            </div>
        `;
        roomList.innerHTML += workerCard;
    }
    
    // Update sidebar and close modal
    RenderedWorkersInSidebar();
    document.getElementById("addWorkerToroom").style.display = "none";
}
//the function that generate Worker Id automaticly
function GenerateId() {
    return Date.now()
}
//the function that Rendered the the right workers in the right room
function RenderedWorkersinModal() {
    let WhoCanWorks = FilterWorkers();
    unassigned_staff_list.forEach(worker => {
        if (WhoCanWorks.includes(worker.worker_role)) {
            workerCard += `
 <div draggabel = true ondragstart="dragstartHandler(event)"  id="staff_card" class="staff_card">
                <img class="rounded-full border-dashed border border-[#999696] ml-2"  src="${worker.worker_profile_image || '/public/man (1).png'}" 
                     width="100%" class="grid place-content-center" height="100%" 
                     id="staff_card_profil" alt="Staff Profile">
            </div>
            <div class="grid-cols-1">
                <p id="staff_name" class="text-white">${worker.worker_name}</p>
                <p id="staff_role" class="secondry_font">${worker.worker_role}</p>
            </div>
        </div>
     `;
            workersListInModal.innerHTML = workerCard;
        }
    });
}
//
// the function that display staff cards
function RenderedWorkersInSidebar() {
    let unassigned_staff_card = ""
    for (let item of unassigned_staff_list) {
        console.log(item)
        unassigned_staff_card += `
            <div class="staff-card" draggable="true" ondragstart="dragstartHandler(event)">
                <img onclick="WorkerProfileDetails(${item.id})" 
                     src="${item.worker_profile_image || '/public/user (1).png'}" 
                     alt="Staff Profile">
                <div class="staff-info">
                    <div class="staff-name">${item.worker_name}</div>
                    <div class="staff-role">${item.worker_role}</div>
                </div>
            </div>
        `;
    }
    unassignedStaffList.innerHTML = unassigned_staff_card;
}
// the function that allow user to see worker details 
function WorkerProfileDetails(id) {
    let experiencesContainer = document.getElementById("experiencesContainer")
    let workerPersonalInformation = document.getElementById("workerPersonalInformation")
    let findworker = unassigned_staff_list.find((worker) => worker.id == id);
    console.log(findworker)
    workerProfile.style.display = "grid"
    let WorkerDetails = `
     <div>
    <h1 class = "text-black text-center title_font">Worker Profile</h1>
 <div draggabel = true ondragstart="dragstartHandler(event)"  id="staff_card" class="staffCardInprofileModal">
            <div style="background-image: url('/public/white.jpg');" 
                id="staff_profil" 
                class="w-15 h-15 rounded-full border-dashed border border-[#999696] ml-2">
                <img onclick = "WorkerProfileDetails(${findworker.id})" src="${findworker.worker_profile_image || '/public/user (1).png'}" 
                     width="100%" class="grid place-content-center" height="100%" 
                     id="staff_card_profil" alt="Staff Profile">
            </div>
            <div class="grid-cols-1">
                <p id="staff_name" class="primary_font">${findworker.worker_name}</p>
                <p id="staff_role" class="secondry_font">${findworker.worker_role}</p>
            </div>
            
        </div>
     `
    let experience = ""

    for (let item of findworker.experiences) {
        experience += `
            
<div id="experience_details" class="bg-[#f3f3f3] mt-5 p-10 rounded-sm grid gap-4">
                    <h2 class="modal_primary_font text-center">Experience</h2>
                    <div class="grid gap-4" id="experiences_container">
                        <label class="modal_label" for="company_name">Company:</label>
                        <p>${item.companyNameInexperience}</p>
                        <label class="modal_label" for="worker_role">Role:</label>
                       <p>${item.workerRoleInexperience}</p>
                        <label class="modal_label" for="starting_date">From:</label>
                       <p>${item.endingDateInexperience}</p>
                        <label class="modal_label" for="ending_date">To:</label>
                        <p>${item.startingDateInexperience}</p>

                </div>
     `;
        experiencesContainer.innerHTML = experience
    }
    workerPersonalInformation.innerHTML = WorkerDetails;
}
function InitApp() {

}
