import"./assets/style-CArAuplY.js";class d{constructor(e,a){this.id=Date.now(),this.title=e,this.priority=a,this.done=!1,this.createdAt=new Date().toISOString()}complete(){this.done=!0}}const i=document.querySelector("#task-form"),u=document.querySelector("#filter-tabs"),c=document.querySelector("#tasks-list"),r=JSON.parse(localStorage.getItem("tasks"))??[],f=document.querySelector("#quote-text"),k=document.querySelector("#quote-author");o(r);v("https://api.quotable.io/random").then(t=>{f.textContent=t.content,k.textContent=t.author});i.addEventListener("submit",h);u.addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.dataset.filter,a=r.filter(({done:s})=>e==="all"?!0:e==="done"?s===!0:e==="active"?s===!1:!1);o(a),document.querySelectorAll(".filter-tab").forEach(s=>s.classList.remove("active")),t.target.classList.add("active")});c.addEventListener("click",t=>{const e=t.target.classList.contains("btn-danger"),a=t.target.classList.contains("task-check");if(e){g(t);return}if(a){S(t);return}});function m(t){return t.map(({id:e,title:a,priority:s,done:n})=>`
        <div class="task-card ${n?"done":""}" data-id="${e}">
            <div class="task-check">✓</div>
            <div class="task-body">
                <div class="task-title">${a}</div>
                <div class="task-meta"></div>
            </div>
            <span class="priority-badge priority-low">${s}</span>
            <div class="task-actions">
                <button class="btn btn-sm btn-danger">Видалити</button>
             </div>
        </div>
        `).join("")}function h(t){t.preventDefault();const e=document.querySelector("#task-title").value,a=document.querySelector("#task-priority").value,s=new d(e,a);r.push(s),o(r),localStorage.setItem("tasks",JSON.stringify(r)),i.reset()}function o(t){c.innerHTML=m(t)}function g(t){const e=t.target.closest(".task-card"),a=Number(e.dataset.id),s=r.find(({id:l})=>l===a),n=r.indexOf(s);n!==-1&&(r.splice(n,1),o(r),localStorage.setItem("tasks",JSON.stringify(r)))}function S(t){const e=t.target.closest(".task-card"),a=Number(e.dataset.id),s=r.find(({id:n})=>n===a);s&&(s.done=!s.done,localStorage.setItem("tasks",JSON.stringify(r)),o(r))}function v(t){return fetch(t).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{console.log(e)})}
//# sourceMappingURL=index.js.map
