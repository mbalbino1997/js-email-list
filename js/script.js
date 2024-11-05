const emailList=document.getElementById("emailList");
const btnGenerator=document.getElementById("btnGenerator");
const num=10;

function randomEmailGenerator() {
    emailList.innerHTML="";
    const fragment= document.createDocumentFragment();
    const proms= [];
    for (let i=0; i<num;i++) {
        const prom =
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                const li = document.createElement("li");
                li.textContent = `Email ${i+1}: ${res.data.response}`
                fragment.appendChild(li);
                
            })
            .catch((err) => {
                console.log("Qualcosa è andato storto", err);
            })
            proms.push(prom)
    }
    Promise.all(proms).then(() => {
        emailList.appendChild(fragment);

    })
}
btnGenerator.addEventListener("click",()=>randomEmailGenerator());

