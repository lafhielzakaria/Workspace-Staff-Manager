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
    document.getElementById("experiences_field").innerHTML = "";
    document.getElementById("worker_card_profil").src = "";
    document.getElementById("worker_card_profil").classList.add("hidden");
    new_experience_details = "";
    // Reset input borders
    workerForm.querySelectorAll(".userInputs").forEach(input => {
        input.style.border = "";
    });
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
})
document.getElementById("closeProfileDetalsModal").addEventListener("click", () => {
    workerProfile.style.display = "none"
})
addExperienceBtn.addEventListener("click", () => {
    let experiences_field = document.getElementById("experiences_field")
    new_experience_details += `
        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 class="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <i class="fas fa-briefcase text-blue-500"></i>
                Experience
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-medium text-gray-600 mb-1">Company</label>
                    <input class="experiencesInputs w-full p-2 border border-gray-300 rounded text-sm" name="companyNameInexperience" type="text" placeholder="Company name">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-600 mb-1">Role</label>
                    <input class="experiencesInputs w-full p-2 border border-gray-300 rounded text-sm" name="workerRoleInexperience" type="text" placeholder="Job title">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-600 mb-1">From</label>
                    <input class="experiencesInputs w-full p-2 border border-gray-300 rounded text-sm" type="date" name="startingDateInexperience">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-600 mb-1">To</label>
                    <input class="experiencesInputs w-full p-2 border border-gray-300 rounded text-sm" type="date" name="endingDateInexperience">
                </div>
            </div>
        </div>`
    experiences_field.innerHTML = new_experience_details
});
// the function that validate user inputs before Submited
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
    addNewWorkerModal.close();
    RenderedWorkersInSidebar()
    workerForm.reset();
    document.getElementById("experiences_field").innerHTML = "";
    document.getElementById("worker_card_profil").src = "";
    document.getElementById("worker_card_profil").classList.add("hidden");
    new_experience_details = "";
    // Reset input borders
    workerForm.querySelectorAll(".userInputs").forEach(input => {
        input.style.border = "";
    });
});

// the function that filtre the workers and  display theme in the modal
function FilterWorkers(btn) {
    let WhoCanWorks = []
    let RightRoom = btn.closest('[data-room]');
    let RightroomId = RightRoom.dataset.room;
    
    switch (RightroomId) {
        case "reception_room":
            WhoCanWorks = ["Receptionist"];
            break;
        case "servers_room":
            WhoCanWorks = ["IT Guy"];
            break;
        case "security_room":
            WhoCanWorks = ["Security"];
            break;
        case "archives_room":
            WhoCanWorks = ["IT Guy", "Receptionist", "Security", "Other", "Manager"];
            break;
        default:
            WhoCanWorks = ["IT Guy", "Receptionist", "Security", "Other", "Manager"];
            break;
    }
    
    // Manager can be assigned everywhere
    if (!WhoCanWorks.includes("Manager")) {
        WhoCanWorks.push("Manager");
    }
    
    // Cleaning can be assigned everywhere except Archives
    if (RightroomId !== "archives_room" && !WhoCanWorks.includes("Cleaning")) {
        WhoCanWorks.push("Cleaning");
    }
    const addWorkerToroom = document.getElementById("addWorkerToroom")
    const workersListInModal = document.getElementById("workersListInModal")
    let workerCard = ""
    
    unassigned_staff_list.forEach(worker => {
        if (WhoCanWorks.includes(worker.worker_role)) {
            workerCard += `
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer transition-all hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-sm border border-gray-200 mb-3" onclick="assignWorkerToRoom(${worker.id}, '${RightroomId}')">
                    <img src="${worker.worker_profile_image || '/public/man (1).png'}" alt="Staff Profile" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
                    <div class="flex-1">
                        <div class="font-medium text-gray-900 mb-1">${worker.worker_name}</div>
                        <div class="text-sm text-gray-600">${worker.worker_role}</div>
                    </div>
                </div>
            `;
        }
    });
    
    workersListInModal.innerHTML = workerCard || '<div class="flex flex-col items-center justify-center gap-3 p-8 text-gray-500 text-center"><i class="fas fa-users-slash text-3xl text-gray-400"></i><p class="text-sm">No suitable staff available</p></div>';
    return WhoCanWorks;
}

// Function to assign worker to room and display it
function assignWorkerToRoom(workerId, roomId) {
    const worker = unassigned_staff_list.find(w => w.id == workerId);
    // Remove from unassigned list
    const index = unassigned_staff_list.findIndex(w => w.id == workerId);
    unassigned_staff_list.splice(index, 1);
    // Add to room
    let listId = roomId.replace('_room', '_staff_list');
    if (roomId === 'vault_room') listId = 'vault_list';
    if (roomId === 'staff_room') listId = 'staff_list';
    const roomList = document.getElementById(listId);
    if (roomList) {
        const workerCard = `
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <img src="${worker.worker_profile_image || '/public/user (1).png'}" alt="Staff Profile" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
                <div class="flex-1">
                    <div class="font-medium text-gray-900 mb-1">${worker.worker_name}</div>
                    <div class="text-sm text-gray-600">${worker.worker_role}</div>
                </div>
                <button onclick="MoveToSideBar()" class="text-red-500 hover:text-red-700 p-1"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;
        roomList.innerHTML += workerCard;
    }
    
    // Update sidebar and close modal
    RenderedWorkersInSidebar();
    document.getElementById("addWorkerToroom").style.display = "none";
}
// the function that move the Worker From the room to the Side bar when user click to the delete btn
function MoveToSideBar() {
    
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
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer transition-all hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-sm border border-gray-200" draggable="true" ondragstart="dragstartHandler(event)">
                <img onclick="WorkerProfileDetails(${item.id})" 
                     src="${item.worker_profile_image || '/public/user (1).png'}" 
                     alt="Staff Profile"
                     class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
                <div class="flex-1">
                    <div class="font-medium text-gray-900 mb-1">${item.worker_name}</div>
                    <div class="text-sm text-gray-600">${item.worker_role}</div>
                </div>
            </div>
        `;
    }
    unassignedStaffList.innerHTML = unassigned_staff_card;
}
// the function that allow user to see worker details 
function WorkerProfileDetails(id) {
    let findworker = unassigned_staff_list.find((worker) => worker.id == id);
    if (!findworker) return;
    
    document.getElementById("workerProfile").style.display = "flex";
    
    document.getElementById("workerPersonalInformation").innerHTML = `
        <div class="text-center mb-6">
            <img src="${findworker.worker_profile_image || '/public/user (1).png'}" 
                 class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100">
            <h2 class="text-xl font-bold text-gray-900">${findworker.worker_name}</h2>
            <p class="text-blue-600 font-medium">${findworker.worker_role}</p>
        </div>
    `;
    
    let experienceHtml = "";
    if (findworker.experiences && findworker.experiences.length > 0) {
        experienceHtml = "<h3 class='text-lg font-semibold text-gray-900 mb-4'>Experience</h3>";
        findworker.experiences.forEach(exp => {
            experienceHtml += `
                <div class="bg-gray-50 p-4 rounded-lg mb-3">
                    <div class="font-medium text-gray-900">${exp.companyNameInexperience}</div>
                    <div class="text-blue-600 text-sm">${exp.workerRoleInexperience}</div>
                    <div class="text-gray-500 text-xs mt-1">${exp.startingDateInexperience} - ${exp.endingDateInexperience}</div>
                </div>
            `;
        });
    } else {
        experienceHtml = "<p class='text-gray-500 text-center'>No experience recorded</p>";
    }
    
    document.getElementById("experiencesContainer").innerHTML = experienceHtml;
}

