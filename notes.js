const fs = require('fs')
const chalk = require('chalk')


//Reading an note

 const readNotes = (title)=>{
     const notesRead = loadNotes()
     const found = notesRead.find((element)=>
         element.title === title
     )
     debugger
     if(found){
         console.log(chalk.blue("title : " + found.title))
         console.log(chalk.white("Body : " + found.body))

     }else{
         console.log(chalk.red("NO note Found"))
     }
 }

//List a note

const listNotes = ()=>{
    console.log(chalk.bgGreen("your Notes.."))
    const getAllNotes = loadNotes()
    getAllNotes.forEach((element) => console.log(element.title))
}

//Adding a Note

const addNote = (title , body)=>{
    const notes = loadNotes()
    //  const duplicateNotes = notes.filter((Element)=>
    //      Element.title ===title
    //  )
     const duplicate = notes.find((element)=>{
         return element.title === title
     })
     

     if(!duplicate){  //or we can do duplicate === undefined
        notes.push({
            title : title,
            body : body
        })
        saveData(notes)
        console.log(chalk.bgGreen('Note added sucessfully'))
    }
    else{
        console.log(chalk.bgRed("Title already taken"))
     }

}

//Removing a note
const removeNote = (title)=>{
    const allNotes = loadNotes()
    const afterRemove = allNotes.filter((Element)=>
         Element.title !== title
    )
    if(allNotes.length === afterRemove.length){
        console.log(chalk.bgRed("No note found!"))
    }else{
        console.log(chalk.bgGreen("Note removed"))
        saveData(afterRemove)
    }
}

//function to load data

const loadNotes = ()=>{
   try{
    const data = JSON.parse(fs.readFileSync('./Notes-data.json'))
    return data
   }catch(e){
       return [] //returns an empty array if no data in the file
   }
}

// function to save data

const saveData = (notes)=>{
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('Notes-data.json' , jsonData)
}

module.exports = {listNotes, addNote , removeNote , readNotes}