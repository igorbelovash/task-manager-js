import"./assets/style-CArAuplY.js";class l{constructor(e,s){this.id=Date.now(),this.title=e,this.priority=s,this.done=!1,this.createdAt=new Date().toISOString()}complete(){this.done=!0}}const c=document.querySelector("#task-form"),u=document.querySelector("#filter-tabs"),o=document.querySelector("#tasks-list"),a=JSON.parse(localStorage.getItem("tasks"))??[];i(a);c.addEventListener("submit",f);u.addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.dataset.filter,s=a.filter(({done:r})=>e==="all"?!0:e==="done"?r===!0:e==="active"?r===!1:!1);i(s)});o.addEventListener("click",t=>{const e=t.target.classList.contains("btn-danger"),s=t.target.classList.contains("task-check");if(e){m(t);return}if(s){g(t);return}});function k(t){return t.map(({id:e,title:s,priority:r,done:n})=>`
        <div class="task-card ${n?"done":""}" data-id="${e}">
            <div class="task-check">✓</div>
            <div class="task-body">
                <div class="task-title">${s}</div>
                <div class="task-meta"></div>
            </div>
            <span class="priority-badge priority-low">${r}</span>
            <div class="task-actions">
                <button class="btn btn-sm btn-danger">Видалити</button>
             </div>
        </div>
        `).join("")}function f(t){t.preventDefault();const e=document.querySelector("#task-title").value,s=document.querySelector("#task-priority").value,r=new l(e,s);a.push(r),i(a),localStorage.setItem("tasks",JSON.stringify(a)),c.reset()}function i(t){o.innerHTML=k(t)}function m(t){const e=t.target.closest(".task-card"),s=Number(e.dataset.id),r=a.find(({id:d})=>d===s),n=a.indexOf(r);n!==-1&&(a.splice(n,1),i(a),localStorage.setItem("tasks",JSON.stringify(a)))}function g(t){const e=t.target.closest(".task-card"),s=Number(e.dataset.id),r=a.find(({id:n})=>n===s);r&&(r.done=!r.done,localStorage.setItem("tasks",JSON.stringify(a)),i(a))}
//# sourceMappingURL=index.js.map
