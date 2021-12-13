function Human(name,surname){
    this.name = name;
    this.surname = surname;
}

let humans = [new Human('Hikmet','Abbasov'),new Human('Nergiz','Rustemova'),new Human('Abbas','Quliyev')];
let ul = document.getElementById('list')

function createHumanList(){
    setTimeout(()=>{
        humans.forEach(item=>{
            let li = document.createElement('li');
            li.innerText = `${item.name} ${item.surname}`

            ul.appendChild(li)
        })
    },1000)
}



// function addHuman(callback){
//     setTimeout(() => {
//         let newHuman = new Human('Hesen','Seyfullayev')
//         humans.push(newHuman)
//         callback()
//     }, 2000);
// }
// addHuman(createHumanList);


function addHuman(callback){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let newHuman = new Human('Hesen','Seyfullayev')
            humans.push(newHuman)

            let hasError = true;

            if(!hasError){
                resolve('successful');
            }
            else reject('Bilinmedik bir xeta bas verdi!')
        }, 2000);
    })
}

// addHuman().then((result)=>{
//     console.log(result)
//     createHumanList();
// })
// .catch((error)=>{
//     alert(error)
// })

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>{
    data.forEach(elem=>{
        let card = `   <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${elem.title}</h5>
              <p class="card-text">${elem.body}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    </div>`
    document.querySelector('#blog .row').innerHTML+=card
    })
})

let today = new Date();
console.log(today.toDateString('dd-MM-yyyy'))
fetch('https://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=12&year=2021')
.then(response=>response.json() )
.then(result=>console.log(result.data.find(element => element.date.gregorian.date=='13-12-2021')))

// createHumanList();
