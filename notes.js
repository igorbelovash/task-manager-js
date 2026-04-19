import"./assets/style-CArAuplY.js";class l{constructor(e,o,s){this.id=Date.now(),this.title=e,this.body=s,this.tag=o,this.createdAt=new Date().toISOString()}}const i=document.querySelector("#note-form"),u=document.querySelector("#search-input"),d=document.querySelector("#notes-grid"),n=JSON.parse(localStorage.getItem("notes"))??[];r(n);i.addEventListener("submit",v);u.addEventListener("input",t=>{const e=t.target.value.toLowerCase(),o=n.filter(({title:s})=>s.toLowerCase().includes(e));r(o)});d.addEventListener("click",t=>{if(t.target.classList.contains("btn-danger")){g(t);return}});function m(t){return t.map(({id:e,title:o,body:s,tag:a,createdAt:c})=>`
        <div class="note-card" data-id="${e}">
            <div class="note-card-header">
                <div class="note-title">${o}</div>
                <button class="btn btn-sm btn-danger">✕</button>
            </div>
            <div class="note-body">${s}</div>
            <div class="note-footer">
                <span class="note-tag">${a}</span>
                <span class="note-date">${new Date(c).toLocaleDateString()}</span>
            </div>
        </div>
        `).join("")}function v(t){t.preventDefault();const e=document.querySelector("#note-title").value,o=document.querySelector("#note-tag").value,s=document.querySelector("#note-body").value,a=new l(e,o,s);n.push(a),r(n),localStorage.setItem("notes",JSON.stringify(n)),i.reset()}function r(t){d.innerHTML=m(t)}function g(t){const e=t.target.closest(".note-card"),o=Number(e.dataset.id),s=n.find(({id:c})=>c===o),a=n.indexOf(s);a!==-1&&(n.splice(a,1),r(n),localStorage.setItem("notes",JSON.stringify(n)))}
//# sourceMappingURL=notes.js.map
