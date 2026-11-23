const tribes = [
  {id:"robotics",category:"engineering",number:"01",icon:"⌘",name:"Robotics & Autonomous Systems",short:"Building machines that move, adapt, and work alongside people.",members:486,lead:"Dr. Amara Okafor",hub:"Boston · Karachi · Toronto",description:"We design embodied intelligence for the real world—from assistive robotics and soft grippers to autonomous systems that cooperate with people. AIT-linked technical workshops add practical prototyping and mechatronics depth.",projects:"Adaptive prosthetics · Swarm navigation · Human–robot collaboration"},
  {id:"quantum",category:"science",number:"02",icon:"◉",name:"Quantum & Applied Physics",short:"Making the abstract tangible, from quantum materials to sensing.",members:312,lead:"Prof. Elias Morgan",hub:"London · Singapore",description:"A home for experimental and theoretical physicists, materials scientists and curious engineers. We translate discoveries in quantum systems into better sensors, new materials and more accessible science.",projects:"Quantum sensing · Photonic materials · Open lab instruments"},
  {id:"bioengineering",category:"science",number:"03",icon:"✳",name:"Bio-Engineering & Synthetic Systems",short:"Engineering with living systems for a healthier, more resilient world.",members:427,lead:"Dr. Leila Haddad",hub:"Nairobi · Karachi · Boston",description:"We work at the meeting point of biology, design and engineering. AIT-aligned technical pathways support accessible diagnostics, regenerative materials and resilient food systems.",projects:"Biosensors · Biodesign · Regenerative materials"},
  {id:"computational",category:"computing",number:"04",icon:"⠿",name:"Computational AI & Data Science",short:"Creating trustworthy intelligence to answer consequential questions.",members:691,lead:"Dr. Jonah Lee",hub:"Toronto · Karachi · Online",description:"Our community develops transparent, human-centered machine learning and computational methods. Partnership with AIT helps connect academic computing pathways with applied community projects.",projects:"Responsible AI · Scientific ML · Open datasets"},
  {id:"energy",category:"engineering",number:"05",icon:"↯",name:"Clean Energy & Advanced Materials",short:"Accelerating the materials and energy transition, together.",members:484,lead:"Prof. Sofia Nguyen",hub:"Singapore · Karachi · London",description:"From community-scale storage to low-carbon materials, we make the energy transition an engineering challenge we can solve together. Researchers, makers and policy thinkers are all part of the conversation.",projects:"Microgrids · Circular materials · Energy storage"}
];

const finderQuestions=[
  {prompt:"What would you love to make possible?",options:[{label:"Build machines that help people",tribe:"robotics"},{label:"Create smarter, more human AI",tribe:"computational"},{label:"Make clean energy work for everyone",tribe:"energy"}]},
  {prompt:"Which big question pulls you in?",options:[{label:"How can living systems solve real problems?",tribe:"bioengineering"},{label:"What can the quantum world reveal?",tribe:"quantum"},{label:"How do we make data more trustworthy?",tribe:"computational"}]},
  {prompt:"Pick a challenge for your next chapter.",options:[{label:"Design technology that moves and adapts",tribe:"robotics"},{label:"Build a healthier, more resilient world",tribe:"bioengineering"},{label:"Rethink materials and energy",tribe:"energy"},{label:"Make the invisible universe measurable",tribe:"quantum"}]}
];

const labs = [
  {id:"field-robotics",category:"robotics",tribe:"Robotics & Autonomous Systems",name:"Field Robotics & Resilient Machines Lab",mark:"⌘",lead:"Dr. Amara Okafor",status:"Accepting collaborators",hub:"Boston · Karachi Workshop",abstract:"How can autonomous machines help communities respond to environmental change? This lab develops robust, low-cost field robots for ecological monitoring and disaster-response research, with practical technical support through the AIT partnership.",equipment:"ROS 2 · Mechatronics platforms · Depth cameras · Motion-capture arena",tags:["Robotics","Fieldwork","Open hardware"]},
  {id:"living-materials",category:"life-sciences",tribe:"Bio-Engineering & Synthetic Systems",name:"Living Materials & Biofabrication Studio",mark:"✳",lead:"Dr. Leila Haddad",status:"Open for visiting researchers",hub:"Nairobi · Karachi · Greenhouse Annex",abstract:"What if a material could grow, sense and repair itself? Our studio explores responsible biofabrication and plant-derived composites, pairing shared wet-lab protocols with hands-on prototyping.",equipment:"Benchtop bioreactors · Open-source microscopes · Bio-based materials library · CAD/CAM studio",tags:["Bioengineering","Materials","Open science"]},
  {id:"urban-energy",category:"climate",tribe:"Clean Energy & Advanced Materials",name:"Urban Energy Commons Lab",mark:"↯",lead:"Prof. Sofia Nguyen",status:"Active field season",hub:"Singapore · Karachi · Community Microgrid",abstract:"We study how neighborhoods can generate, store and share energy more equitably. Member teams build open forecasting tools and evaluate small-scale microgrids, with technical exchange through AIT partners.",equipment:"OpenEMS · Power-quality analyzers · Solar test array · Community energy datasets",tags:["Climate","Energy systems","Field research"]},
  {id:"trustworthy-computing",category:"computing",tribe:"Computational AI & Data Science",name:"Trustworthy Computing & Sensing Group",mark:"⌬",lead:"Dr. Jonah Lee",status:"Taking project proposals",hub:"Toronto · Karachi · Data Commons",abstract:"Reliable machine intelligence starts with reliable evidence. This group builds privacy-conscious sensing and transparent evaluation methods for scientific and civic datasets.",equipment:"Edge AI boards · GPU cluster · Data sandbox · Open benchmark suite",tags:["Machine learning","Responsible AI","Data science"]},
  {id:"quantum-sensing",category:"life-sciences",tribe:"Quantum & Applied Physics",name:"Quantum Sensing & Photonics Lab",mark:"◉",lead:"Prof. Elias Morgan",status:"Accepting student researchers",hub:"London · Karachi · Applied Physics",abstract:"We make precise optical measurements more accessible. The lab investigates photonic sensors and low-cost experimental controls, bringing physicists and electronics engineers together.",equipment:"Optical breadboards · Tunable diode lasers · Open-source photon counter · Python control stack",tags:["Quantum sensing","Photonics","Instrumentation"]}
];

const events = [
  {id:"symposium",type:"lecture",format:"in-person",month:"DEC",date:"2026-12-05",day:"05",title:"The Shared Future Symposium",description:"A day of big questions about engineering for a future we build together.",time:"09:30–16:00 GMT",location:"Guildhall, London + livestream",host:"Hosted by the NES Research Council",seats:84,capacity:180},
  {id:"robotics-workshop",type:"workshop",format:"in-person",month:"DEC",date:"2026-12-12",day:"12",title:"Make a Robot That Can Listen",description:"A practical, beginner-friendly workshop in physical computing and human-centered robotics.",time:"14:00–17:00 EST",location:"East Campus Workshop, Boston",host:"Robotics & Autonomous Systems Tribe",seats:19,capacity:32},
  {id:"climate-lecture",type:"lecture",format:"online",month:"JAN",date:"2027-01-16",day:"16",title:"Who Owns a Community Microgrid?",description:"An open conversation on energy access, shared infrastructure, and local power.",time:"12:00–13:15 UTC",location:"Online · community room",host:"Clean Energy & Advanced Materials Tribe",seats:136,capacity:250},
  {id:"bio-hack",type:"workshop",format:"in-person",month:"JAN",date:"2027-01-23",day:"23",title:"Open Bio Design Sprint",description:"Collaborate on a prototype for low-cost, open-source soil health sensing.",time:"10:00–16:30 EAT",location:"Greenhouse Annex, Nairobi",host:"Bio-Engineering & Synthetic Systems Tribe",seats:27,capacity:40},
  {id:"science-buildathon",type:"hackathon",format:"online",month:"FEB",date:"2027-02-06",day:"06",title:"Open Science Tools Buildathon",description:"A collaborative 24-hour sprint to make research tools more accessible, reproducible, and welcoming.",time:"09:00 UTC · 24-hour project window",location:"Online · project rooms",host:"NES Open Research Collective",seats:61,capacity:120}
];

const storageKeys={rsvps:"nesTribe.rsvps",saved:"nesTribe.savedLabs",applications:"nesTribe.applications",newsletter:"nesTribe.newsletter"};
const getStored=(key,fallback)=>{try{const value=JSON.parse(localStorage.getItem(key));return value??fallback}catch{return fallback}};
let registered=new Set(getStored(storageKeys.rsvps,[]));
let savedLabs=new Set(getStored(storageKeys.saved,[]));
let toastTimer;

function showToast(message){const toast=document.querySelector("#toast-region");toast.textContent=message;toast.classList.add("is-visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("is-visible"),3000)}
function renderTribes(){const query=document.querySelector("#tribe-search").value.trim().toLowerCase();const category=document.querySelector(".tribe-section-filter")?.dataset.active||"all";const list=tribes.filter(item=>(category==="all"||item.category===category)&&`${item.name} ${item.short} ${item.projects}`.toLowerCase().includes(query));const grid=document.querySelector("#tribe-grid");grid.innerHTML=list.length?list.map(item=>`<article class="tribe-card tilt-card"><div class="card-kicker"><span>TRIBE / ${item.number}</span><span>${item.category.toUpperCase()}</span></div><div class="card-icon" aria-hidden="true">${item.icon}</div><h3>${item.name}</h3><p>${item.short}</p><div class="card-bottom"><span>${item.members} members · ${item.hub.split(" · ")[0]}</span><button type="button" data-detail-type="tribe" data-detail-id="${item.id}" aria-label="Explore ${item.name}">Explore tribe ↗</button></div></article>`).join(""):'<p class="no-results">No tribes match that search. Try another discipline.</p>';attachTilt(grid)}

function renderLabs(){const query=document.querySelector("#lab-search").value.trim().toLowerCase();const category=document.querySelector(".lab-section-filter")?.dataset.active||"all";const list=labs.filter(item=>(category==="all"||item.category===category)&&`${item.name} ${item.tribe} ${item.lead} ${item.tags.join(" ")}`.toLowerCase().includes(query));const grid=document.querySelector("#lab-grid");grid.innerHTML=list.length?list.map(item=>`<article class="lab-card tilt-card"><div class="lab-visual" aria-hidden="true"><span>${item.mark}</span></div><div class="card-kicker"><span>${item.category.replace("-"," ").toUpperCase()}</span><span class="status-dot">${item.status.split(" ")[0].toUpperCase()}</span></div><h3>${item.name}</h3><p>${item.tribe}</p><div class="card-bottom"><span>${item.lead}</span><button type="button" data-detail-type="lab" data-detail-id="${item.id}" aria-label="Explore ${item.name}">Explore lab ↗</button></div><button class="save-lab" type="button" data-save-id="${item.id}" aria-pressed="${savedLabs.has(item.id)}" aria-label="${savedLabs.has(item.id)?"Remove saved lab":"Save lab"}: ${item.name}">${savedLabs.has(item.id)?"Saved ✓":"Save lab +"}</button></article>`).join(""):'<p class="no-results">No research labs match. Try another topic.</p>';attachTilt(grid)}

function renderEvents(){const query=document.querySelector("#event-search").value.trim().toLowerCase();const category=document.querySelector(".event-section-filter")?.dataset.active||"all";const list=events.filter(item=>(category==="all"||item.type===category||item.format===category)&&`${item.title} ${item.description} ${item.location} ${item.host}`.toLowerCase().includes(query));const parent=document.querySelector("#event-list");parent.innerHTML=list.length?list.map(item=>{const isRegistered=registered.has(item.id);const remaining=Math.max(0,item.seats-(isRegistered?1:0));return `<article class="event-card"><time class="event-date" datetime="${item.date}"><span>${item.month} '${item.date.slice(2,4)}</span><strong>${item.day}</strong></time><div class="event-info"><div class="card-kicker"><span>${item.type.toUpperCase()} / ${item.format.toUpperCase()}</span></div><h3>${item.title}</h3><p>${item.description}</p><div class="event-meta"><span>${item.time}</span><span>${item.location}</span></div></div><div class="event-action"><button class="rsvp-button ${isRegistered?"is-registered":""}" type="button" data-rsvp-id="${item.id}" aria-pressed="${isRegistered}">${isRegistered?"Registered ✓":"Reserve a seat"}</button><span class="event-seats" data-seats="${item.id}">${remaining} / ${item.capacity} seats left</span></div></article>`}).join(""):'<p class="no-results">No upcoming events match. Try another search.</p>'}

function attachTilt(root){if(matchMedia("(prefers-reduced-motion: reduce)").matches||matchMedia("(hover: none)").matches)return;root.querySelectorAll(".tilt-card").forEach(card=>{card.addEventListener("pointermove",event=>{const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;card.style.transform=`perspective(850px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-2px)`});card.addEventListener("pointerleave",()=>{card.style.transform=""})})}

function setActiveFilter(button,selector,filterClass){document.querySelectorAll(selector).forEach(item=>{const active=item===button;item.classList.toggle("is-active",active);item.setAttribute("aria-pressed",String(active))});let state=document.querySelector(`.${filterClass}`);if(!state){state=document.createElement("span");state.className=`${filterClass} sr-only`;document.body.append(state)}state.dataset.active=button.dataset.tribeFilter||button.dataset.labFilter||button.dataset.eventFilter}

const finder=document.querySelector("#tribe-finder");
const finderIntro=document.querySelector("#finder-intro");
const finderQuestion=document.querySelector("#finder-question");
const finderResults=document.querySelector("#finder-results");
const finderAnswers=[];

function renderFinderQuestion(){
  const index=finderAnswers.length;
  const question=finderQuestions[index];
  if(!question){
    renderFinderResults();
    return;
  }
  finderIntro.hidden=true;
  finderResults.hidden=true;
  finderQuestion.hidden=false;
  document.querySelector("#finder-step").textContent=`QUESTION 0${index+1} / 0${finderQuestions.length}`;
  document.querySelector("#finder-progress-bar").style.width=`${((index+1)/finderQuestions.length)*100}%`;
  document.querySelector("#finder-prompt").textContent=question.prompt;
  document.querySelector("#finder-options").innerHTML=question.options.map((option,optionIndex)=>`<button class="finder-option" type="button" data-finder-answer="${option.tribe}"><span class="finder-option-number">0${optionIndex+1}</span><span>${option.label}</span><span class="finder-option-arrow" aria-hidden="true">↗</span></button>`).join("");
  finder.querySelector("[data-finder-back]").hidden=index===0;
}

function renderFinderResults(){
  const scores=new Map(tribes.map(tribe=>[tribe.id,0]));
  finderAnswers.forEach(id=>scores.set(id,(scores.get(id)||0)+1));
  const topScore=Math.max(...scores.values());
  const matches=tribes.filter(tribe=>scores.get(tribe.id)===topScore).slice(0,2);
  finderQuestion.hidden=true;
  finderResults.hidden=false;
  finderResults.innerHTML=`<div class="finder-result-heading"><p class="micro-label">YOUR CURIOSITY, YOUR CREW</p><h3>${matches.length>1?"You could feel at home in…":"Your kind of curious has a home."}</h3><p>There's no wrong answer—explore a tribe and see what sparks.</p></div><div class="finder-result-cards">${matches.map(tribe=>`<article class="finder-result-card"><span class="finder-result-icon" aria-hidden="true">${tribe.icon}</span><div><span class="card-kicker">TRIBE / ${tribe.number}</span><h4>${tribe.name}</h4><p>${tribe.short}</p><div class="finder-result-actions"><button type="button" data-detail-type="tribe" data-detail-id="${tribe.id}">Meet the tribe ↗</button><a href="#join" data-join-tribe="${tribe.id}">Join this tribe</a></div></div></article>`).join("")}</div><button class="finder-retry" type="button" data-finder-restart>↺ Try again</button>`;
}

finder.addEventListener("click",event=>{
  if(event.target.closest("[data-finder-start]")){
    finderAnswers.length=0;
    renderFinderQuestion();
    return;
  }
  const answer=event.target.closest("[data-finder-answer]");
  if(answer){
    finderAnswers.push(answer.dataset.finderAnswer);
    renderFinderQuestion();
    return;
  }
  if(event.target.closest("[data-finder-back]")){
    finderAnswers.pop();
    renderFinderQuestion();
    return;
  }
  if(event.target.closest("[data-finder-restart]")){
    finderAnswers.length=0;
    finderResults.hidden=true;
    finderIntro.hidden=false;
    return;
  }
  const joinLink=event.target.closest("[data-join-tribe]");
  if(joinLink){
    document.querySelector("#member-tribe").value=joinLink.dataset.joinTribe;
  }
});

function openDetail(type,id){const item=type==="lab"?labs.find(entry=>entry.id===id):tribes.find(entry=>entry.id===id);if(!item)return;const isLab=type==="lab";const dialog=document.querySelector("#detail-dialog");const content=document.querySelector("#dialog-content");const title=isLab?item.name:item.name;const abstract=isLab?item.abstract:item.description;const facts=isLab?[["Lead researcher",item.lead],["Lab status",item.status],["Research hub",item.hub],["Equipment & stack",item.equipment]]:[["Tribe lead",item.lead],["Member community",`${item.members} curious minds`],["Connected hubs",item.hub],["Current questions",item.projects]];content.innerHTML=`<p class="eyebrow">${isLab?"RESEARCH LAB / "+item.category.replace("-"," ").toUpperCase():"NES-TRIBE / ACADEMIC TRIBE"}</p><h2 id="dialog-title">${title}</h2><p>${abstract}</p><dl class="dialog-facts">${facts.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl><div class="dialog-dialog-actions">${isLab?`<button class="button save-button" type="button" data-save-id="${item.id}" aria-pressed="${savedLabs.has(item.id)}">${savedLabs.has(item.id)?"Saved ✓":"Save this lab +"}</button>`:""}<a class="button button-dark" href="#join" data-dialog-join>Find your place <span aria-hidden="true">↗</span></a></div>`;dialog.showModal();content.querySelector("[data-dialog-join]")?.addEventListener("click",()=>dialog.close())}

function populateTribeSelect(){const select=document.querySelector("#member-tribe");select.insertAdjacentHTML("beforeend",tribes.map(item=>`<option value="${item.id}">${item.name}</option>`).join(""))}
function setError(id,message){document.querySelector(`#${id}-error`).textContent=message}
function validateApplication(){const name=document.querySelector("#member-name"),email=document.querySelector("#member-email"),tribe=document.querySelector("#member-tribe"),skills=[...document.querySelectorAll('input[name="skills"]:checked')],consent=document.querySelector("#member-consent");let valid=true;setError("name","");setError("email","");setError("tribe","");setError("skills","");if(name.value.trim().length<2){setError("name","Please enter a name of at least two characters.");valid=false}if(!email.validity.valid||!email.value.trim()){setError("email","Enter a valid email address.");valid=false}if(!tribe.value){setError("tribe","Choose the tribe you'd like to join.");valid=false}if(skills.length>3){setError("skills","Choose no more than three areas of curiosity.");valid=false}if(!consent.checked){consent.setCustomValidity("Please give us permission to contact you.");consent.reportValidity();valid=false}else consent.setCustomValidity("");return valid}

document.addEventListener("click",event=>{const detail=event.target.closest("[data-detail-type]");if(detail){openDetail(detail.dataset.detailType,detail.dataset.detailId);return}const save=event.target.closest("[data-save-id]");if(save){const id=save.dataset.saveId;savedLabs.has(id)?savedLabs.delete(id):savedLabs.add(id);localStorage.setItem(storageKeys.saved,JSON.stringify([...savedLabs]));renderLabs();const dialogSave=document.querySelector("#dialog-content [data-save-id]");if(dialogSave&&dialogSave.dataset.saveId===id){dialogSave.textContent=savedLabs.has(id)?"Saved ✓":"Save this lab +";dialogSave.setAttribute("aria-pressed",String(savedLabs.has(id)))}showToast(savedLabs.has(id)?"Lab saved to your list.":"Lab removed from your saved list.");return}const rsvp=event.target.closest("[data-rsvp-id]");if(rsvp){const id=rsvp.dataset.rsvpId;registered.has(id)?registered.delete(id):registered.add(id);localStorage.setItem(storageKeys.rsvps,JSON.stringify([...registered]));renderEvents();showToast(registered.has(id)?"Your seat is reserved. See you there!":"Your reservation has been cancelled.");return}});

document.querySelectorAll("[data-tribe-filter]").forEach(button=>button.addEventListener("click",()=>{setActiveFilter(button,"[data-tribe-filter]","tribe-section-filter");renderTribes()}));
document.querySelectorAll("[data-lab-filter]").forEach(button=>button.addEventListener("click",()=>{setActiveFilter(button,"[data-lab-filter]","lab-section-filter");renderLabs()}));
document.querySelectorAll("[data-event-filter]").forEach(button=>button.addEventListener("click",()=>{setActiveFilter(button,"[data-event-filter]","event-section-filter");renderEvents()}));
document.querySelector("#tribe-search").addEventListener("input",renderTribes);
document.querySelector("#lab-search").addEventListener("input",renderLabs);
document.querySelector("#event-search").addEventListener("input",renderEvents);

const menuButton=document.querySelector(".menu-toggle"),navigation=document.querySelector("#primary-nav");
function closeMenu(){navigation.classList.remove("is-open");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Open navigation")}
menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")!=="true";menuButton.setAttribute("aria-expanded",String(open));menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");navigation.classList.toggle("is-open",open)});
navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{closeMenu();navigation.querySelectorAll(".nav-dropdown").forEach(dropdown=>dropdown.open=false)}));
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeMenu();navigation.querySelectorAll(".nav-dropdown").forEach(dropdown=>dropdown.open=false)}});
document.querySelector(".dialog-close").addEventListener("click",()=>document.querySelector("#detail-dialog").close());
document.querySelector("#detail-dialog").addEventListener("click",event=>{if(event.target===event.currentTarget)event.currentTarget.close()});
document.querySelectorAll('input[name="skills"]').forEach(input=>input.addEventListener("change",()=>{const checked=[...document.querySelectorAll('input[name="skills"]:checked')];if(checked.length>3){input.checked=false;setError("skills","Choose up to three areas of curiosity.");showToast("You can choose up to three interests.");return}setError("skills","")}));
document.querySelector("#member-email").addEventListener("input",()=>setError("email",""));
document.querySelector("#member-name").addEventListener("input",()=>setError("name",""));
document.querySelector("#member-tribe").addEventListener("change",()=>setError("tribe",""));

document.querySelector("#join-form").addEventListener("submit",event=>{event.preventDefault();if(!validateApplication()){document.querySelector(".field-error:not(:empty)")?.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});return}const form=event.currentTarget;const data=new FormData(form);const tribe=tribes.find(item=>item.id===data.get("tribe"));const skills=data.getAll("skills");const application={name:data.get("name").trim(),email:data.get("email").trim(),tribe:tribe.name,skills,note:data.get("note").trim(),memberId:`NES-${new Date().getFullYear()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,submittedAt:new Date().toISOString()};const applications=getStored(storageKeys.applications,[]);applications.push(application);localStorage.setItem(storageKeys.applications,JSON.stringify(applications));const pass=document.querySelector("#member-pass");pass.hidden=false;pass.innerHTML=`<p class="pass-top">NES-TRIBE · MEMBERSHIP REQUEST RECEIVED</p><h3>Welcome to the network, ${escapeHTML(application.name)}.</h3><p>You're on your way to finding your people in <strong>${escapeHTML(application.tribe)}</strong>.</p><p class="pass-skills">${skills.length?`Curious about: ${skills.map(escapeHTML).join(" · ")}`:"We'll help you find a starting point."}</p><p class="pass-id">APPLICATION ID · ${application.memberId}</p><button class="reset-button" type="button" id="clear-application">Clear this confirmation</button>`;pass.querySelector("#clear-application").addEventListener("click",()=>{pass.hidden=true});form.reset();document.querySelector("#form-status").textContent="Your application has been saved in this browser.";pass.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});showToast("Application received. Welcome to NES-Tribe!")});

function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
document.querySelector("#newsletter-form").addEventListener("submit",event=>{event.preventDefault();const input=document.querySelector("#newsletter-email"),status=document.querySelector("#newsletter-status");if(!input.validity.valid||!input.value.trim()){status.textContent="Please enter a valid email address.";input.focus();return}const email=input.value.trim().toLowerCase();const subscribers=getStored(storageKeys.newsletter,[]);if(subscribers.includes(email)){status.textContent="You're already on the list. Thanks for being here.";return}subscribers.push(email);localStorage.setItem(storageKeys.newsletter,JSON.stringify(subscribers));status.textContent="You're on the list. Look out for our next monthly note.";event.currentTarget.reset()});

document.querySelector("#reset-data").addEventListener("click",()=>{if(!confirm("Clear saved labs, event reservations, applications, and newsletter subscriptions from this browser?"))return;Object.values(storageKeys).forEach(key=>localStorage.removeItem(key));registered.clear();savedLabs.clear();renderLabs();renderEvents();document.querySelector("#member-pass").hidden=true;document.querySelector("#form-status").textContent="";document.querySelector("#newsletter-status").textContent="";showToast("Local demo data has been cleared.")});
populateTribeSelect();renderTribes();renderLabs();renderEvents();

const chatPanel=document.querySelector("#chat-panel");
const chatLauncher=document.querySelector("#chat-launcher");
const chatInput=document.querySelector("#chat-input");
const chatMessages=document.querySelector("#chat-messages");
const tribeAliases={
  robotics:["robot","robotics","autonomous","prosthetic"],
  quantum:["quantum","physics","photon","photonic"],
  bioengineering:["bio","biology","synthetic","biosensor","biodesign","living material"],
  computational:["ai","artificial intelligence","machine learning","computing","data science","algorithm"],
  energy:["energy","climate","material","microgrid","solar","clean energy"]
};

function normalizeQuestion(value){return value.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu," ").replace(/\s+/g," ").trim()}
function includesAny(text,terms){return terms.some(term=>text.includes(term))}
function findMatchingTribes(question){const words=question.split(" ");return tribes.filter(tribe=>tribeAliases[tribe.id].some(alias=>alias.length<=2?words.includes(alias):question.includes(alias))||question.includes(normalizeQuestion(tribe.name)))}
function chatAction(label,{href,id,type}={}){if(href){const link=document.createElement("a");link.href=href;link.textContent=label;return link}const button=document.createElement("button");button.type="button";button.textContent=label;button.dataset.chatDetailId=id;button.dataset.chatDetailType=type;return button}
function appendChatMessage(role,text,actions=[]){
  const message=document.createElement("article");
  message.className=`chat-message${role==="user"?" is-user":""}`;
  const label=document.createElement("span");label.className="chat-message-label";label.textContent=role==="user"?"YOU":"NES GUIDE";
  const paragraph=document.createElement("p");paragraph.textContent=text;
  message.append(label,paragraph);
  if(actions.length){const actionList=document.createElement("div");actionList.className="chat-message-actions";actions.forEach(action=>actionList.append(chatAction(action.label,action)));message.append(actionList)}
  chatMessages.append(message);chatMessages.scrollTop=chatMessages.scrollHeight;
}

function getGuideReply(rawQuestion){
  const question=normalizeQuestion(rawQuestion);
  const matchedTribes=findMatchingTribes(question);
  const matchedLabs=labs.filter(lab=>matchedTribes.some(tribe=>tribe.name===lab.tribe)||[lab.name,...lab.tags,lab.category].some(term=>question.includes(normalizeQuestion(term))));
  const asksAboutLabs=includesAny(question,["lab","labs","research","project","projects","equipment","stack","researcher"]);

  if(includesAny(question,["hello","hi ","hey","salaam","assalam","what can you do"])||question==="help"){
    return {text:"Hi! I'm the NES-Tribe community guide. I can help with tribes, research labs, events, membership and our community association with Aligarh Institute of Technology."};
  }
  if(includesAny(question,["how many tribes","number of tribes","tribes are there"])){
    return {text:`NES-Tribe has ${tribes.length} interdisciplinary tribes: ${tribes.map(tribe=>tribe.name).join("; ")}.`,actions:[{label:"Explore all tribes",href:"#tribes"}]};
  }
  if(includesAny(question,["find a tribe","which tribe","recommend a tribe","choose a tribe","tribe for me"])||question==="tribes"||question==="tribe"){
    return {text:`Start with what you're curious about:\n${tribes.map(tribe=>`${tribe.name} — ${tribe.short}`).join("\n")}\n\nYou don't need prior expertise, and the AIT connection offers additional technical learning opportunities.`,actions:tribes.slice(0,3).map(tribe=>({label:`Explore ${tribe.name}`,id:tribe.id,type:"tribe"})).concat([{label:"See all tribes",href:"#tribes"}])};
  }
  if(includesAny(question,["event","upcoming","calendar","symposium","workshop","lecture","hackathon","seminar","rsvp","reserve a seat"])){
    const matches=events.filter(event=>includesAny(question,normalizeQuestion(`${event.title} ${event.type} ${event.location} ${event.host}`).split(" ").filter(word=>word.length>3)));
    const listed=matches.length?matches:events;
    return {text:`Here ${matches.length?"is the event that matches your question":"are the upcoming NES-Tribe events"}:\n${listed.map(item=>`${item.month} ${item.day} — ${item.title} (${item.time}; ${item.location})`).join("\n")}\n\nYou can reserve or cancel your seat on the Events section.`,actions:[{label:"Go to events & RSVP",href:"#events"}]};
  }
  if(includesAny(question,["join","membership","member","admission","apply","application","free","fee","cost","expert","eligible","beginner","credentials"])){
    return {text:"NES-Tribe membership is open to students, educators, researchers and working professionals. No prior credentials or expertise are required. Use the community application to choose a tribe and share what you're curious about.",actions:[{label:"Open membership form",href:"#join"}]};
  }
  if(includesAny(question,["where","location","locations","hub","campus","cities","online","meet"])){
    return {text:"NES-Tribe is a connected community with hubs in multiple cities. It is also associated with Aligarh Institute of Technology at Plot ST-16, Block 5, University Road, Gulshan-e-Iqbal, Karachi.",actions:[{label:"Explore the tribes",href:"#tribes"},{label:"Read the AIT association",href:"#about"}]};
  }
  if(includesAny(question,["contact","email","talk to","reach"])){
    return {text:"For official admissions and campus information, use the contact details on aligarh.edu.pk. This demo also includes an enquiry form for collecting programme interest.",actions:[{label:"Open official AIT website",href:"https://aligarh.edu.pk/"},{label:"Open admission enquiry",href:"#join"}]};
  }
  if(includesAny(question,["faculty","leadership","who leads","team","professor","directors"])||question.includes("lead")){
    const leaders=matchedTribes.length?matchedTribes:tribes;
    return {text:`${leaders.length===1?"The lead for this tribe is":"Tribe leads listed on the site"}:\n${leaders.map(tribe=>`${tribe.name} — ${tribe.lead}`).join("\n")}\n\nResearch lab leads and their current projects are listed in the Research section.`,actions:leaders.slice(0,3).map(tribe=>({label:`Meet ${tribe.lead}`,id:tribe.id,type:"tribe"})).concat([{label:"Browse research labs",href:"#research"}])};
  }
  if(includesAny(question,["how many members","member count","community size","size of the community"])){
    return {text:"NES-Tribe brings together more than 2,400 curious members across five interdisciplinary tribes and 12 connected cities.",actions:[{label:"Explore the tribes",href:"#tribes"}]};
  }
  if(includesAny(question,["journal","publication","publications","newsletter","news","article","story","stories"])){
    return {text:"AIT's official website publishes admissions and institute updates. This demo includes a newsletter area for campus and programme updates.",actions:[{label:"Visit official AIT website",href:"https://aligarh.edu.pk/"},{label:"Open updates form",href:"#newsletter-form"}]};
  }
  if(asksAboutLabs||(!matchedTribes.length&&matchedLabs.length)){
    const relevantLabs=matchedLabs.length?matchedLabs:labs;
    return {text:`${matchedLabs.length?"Here are the matching research labs":"NES-Tribe's featured labs and projects"}:\n${relevantLabs.map(lab=>`${lab.name} — ${lab.lead}; ${lab.status}.`).join("\n")}\n\nOpen a lab card to read its research summary, hub, and equipment or technology stack.`,actions:relevantLabs.slice(0,3).map(lab=>({label:`Explore ${lab.name}`,id:lab.id,type:"lab"}))};
  }
  if(matchedTribes.length){
    const selected=matchedTribes.length===1?matchedTribes:[...matchedTribes].sort((a,b)=>a.members-b.members);
    return {text:`${selected.length===1?"Here's the tribe that matches your interests":"These tribes may be a good fit"}:\n${selected.map(tribe=>`${tribe.name}\n${tribe.short} Lead: ${tribe.lead}. Hubs: ${tribe.hub}. Current focus: ${tribe.projects}.`).join("\n\n")}\n\nYou do not need prior expertise to join a tribe.`,actions:selected.slice(0,3).map(tribe=>({label:`Explore ${tribe.name}`,id:tribe.id,type:"tribe"})).concat([{label:"Apply to join",href:"#join"}])};
  }
  if(includesAny(question,["faq","question","who are you","what is nes","about nes","about ait","ait partnership","aligarh"])){
    return {text:"NES-Tribe is an interdisciplinary community of engineers, scientists and creative thinkers. It is associated with Aligarh Institute of Technology, established in 1989, to connect community projects with practical technical learning in Karachi.",actions:[{label:"Read common questions",href:"#faq-title"},{label:"Explore tribes",href:"#tribes"},{label:"About the partnership",href:"#about"}]};
  }
  return {text:"I don't have a preloaded answer for that yet. I can help with NES-Tribe's five tribes, research labs, events, membership or the community's association with Aligarh Institute of Technology.",actions:[{label:"Browse tribes",href:"#tribes"},{label:"Read about AIT",href:"#about"},{label:"Join the community",href:"#join"}]};
}

function sendGuideMessage(question){
  const cleanQuestion=question.trim();
  if(!cleanQuestion)return;
  appendChatMessage("user",cleanQuestion);
  const reply=getGuideReply(cleanQuestion);
  appendChatMessage("assistant",reply.text,reply.actions||[]);
}

function openGuideChat(){chatPanel.hidden=false;chatLauncher.setAttribute("aria-expanded","true");chatLauncher.setAttribute("aria-label","Close NES-Tribe Community Guide");chatInput.focus()}
function closeGuideChat({restoreFocus=true}={}){chatPanel.hidden=true;chatLauncher.setAttribute("aria-expanded","false");chatLauncher.setAttribute("aria-label","Open NES-Tribe Community Guide");if(restoreFocus)chatLauncher.focus()}
chatLauncher.addEventListener("click",()=>chatPanel.hidden?openGuideChat():closeGuideChat({restoreFocus:false}));
document.querySelector("#chat-close").addEventListener("click",()=>closeGuideChat());
document.querySelector("#chat-clear").addEventListener("click",()=>{chatMessages.replaceChildren();appendChatMessage("assistant","Hi! I'm the NES-Tribe guide. Ask me about tribes, research labs, events, membership or the Aligarh Institute partnership.");chatInput.focus()});
document.querySelector("#chat-form").addEventListener("submit",event=>{event.preventDefault();const question=chatInput.value;sendGuideMessage(question);chatInput.value="";chatInput.focus()});
document.querySelector("#chat-suggestions").addEventListener("click",event=>{const prompt=event.target.closest("[data-chat-prompt]");if(!prompt)return;sendGuideMessage(prompt.dataset.chatPrompt);chatInput.focus()});
chatMessages.addEventListener("click",event=>{const action=event.target.closest("[data-chat-detail-id]");if(!action)return;closeGuideChat({restoreFocus:false});openDetail(action.dataset.chatDetailType,action.dataset.chatDetailId)});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!chatPanel.hidden)closeGuideChat()});
appendChatMessage("assistant","Hi! I'm the NES-Tribe guide. Ask me about tribes, research labs, events, membership or the Aligarh Institute partnership.");

// Page-level motion and active navigation
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
  const revealTargets=document.querySelectorAll(".section-head,.tribe-card,.lab-card,.event-card,.story,.join-detail,.faq-list details");
  revealTargets.forEach((element,index)=>{
    element.classList.add("reveal-up");
    element.style.transitionDelay=`${Math.min(index%4,3)*55}ms`;
  });
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:"0px 0px -35px"});
  revealTargets.forEach(element=>revealObserver.observe(element));

  const heroArt=document.querySelector(".hero-art");
  const orbitScene=document.querySelector(".orbit-scene");
  if(heroArt&&orbitScene){
    heroArt.addEventListener("pointermove",event=>{
      const rect=heroArt.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      heroArt.classList.add("is-tilting");
      orbitScene.style.transform=`translate(${x*8}px,${y*8}px)`;
    });
    heroArt.addEventListener("pointerleave",()=>{
      heroArt.classList.remove("is-tilting");
      orbitScene.style.transform="";
    });
  }

  if(matchMedia("(hover: hover)").matches){
    const cursor=document.createElement("div");
    cursor.className="ambient-cursor";
    cursor.setAttribute("aria-hidden","true");
    document.body.append(cursor);
    window.addEventListener("pointermove",event=>{
      cursor.style.left=`${event.clientX}px`;
      cursor.style.top=`${event.clientY}px`;
      cursor.style.opacity="1";
    },{passive:true});
    document.documentElement.addEventListener("mouseleave",()=>cursor.style.opacity="0");
  }
}

const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll(".primary-nav a[href^='#']")];
if("IntersectionObserver" in window){
  const navObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    navLinks.forEach(link=>{
      const active=link.getAttribute("href")===`#${visible.target.id}`;
      link.toggleAttribute("aria-current",active);
    });
  },{rootMargin:"-20% 0px -65%",threshold:[.05,.2,.5]});
  sections.forEach(section=>navObserver.observe(section));
}
