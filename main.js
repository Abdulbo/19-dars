let DATA = {
    users:[
    {
        id:1,
        name:'Devid',
        photoUrl:'https://picsum.photos/300?random=1',
        lastUpadateTime:123432,
        phone:+99890929283,
        messages:[
        {
            text:'hi',
            ovner: true
        },
        {
            text:'whatsap?',
            ovner:false
        }
        ]
    },

    {
        id:2,
        name:'Sara',
        photoUrl:'https://picsum.photos/300?random= 2',
        lastUpadateTime:123432,
        phone:+99890929283,
        messages:[
        {
            text:'hi',
            ovner: true
        },
        {
            text:'hello',
            ovner:false
        }
        ]
    }
    ]
}

let usersList = document.querySelector('.contacts')
let messagesList = document.querySelector('.messages')
let title  = document.querySelector('.kimdir')
let userPhoto = document.querySelector('.photouser')
let username  = document.querySelector('.username')
let phoneNumber = document.querySelector('.phonenumber')

DATA.users.forEach(user => {
    let newUsersLiElement = document.createElement('li')
    newUsersLiElement.textContent = user.name

    newUsersLiElement.addEventListener('click',event => {
        messagesList.textContent = ''
         title.textContent = user.name

     user.messages.forEach(message =>{
        let newMessageLiElement = document.createElement('li')

        newMessageLiElement.textContent = message.text
        messagesList.appendChild(newMessageLiElement)

        userPhoto.src = user.photoUrl
        username.textContent = user.name
        phoneNumber.textContent = user.phone   

        if(message.ovner){
            newMessageLiElement.classList.add('birnima')
        }
    })
 })
    usersList.appendChild(newUsersLiElement)
})