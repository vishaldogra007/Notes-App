const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const { command, describe, string } = require('yargs')
const notes = require('./notes')



//Add add command
yargs.command({
    command : "add",
    describe : "Add a new note",
    builder : {
        title  : { 
            describe : "note title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note",
            demandOption : true,
            type : 'string'
        }
    },
    handler  (argv){
         notes.addNote(argv.title , argv.body)
    }
})


//create remove command
yargs.command({
    command : "remove",
    describe : "Remove a note",
    builder : {
        title : {
            describe : "Notes title",
            demandOption : true,
            type  : 'string' 
        }
    }
    ,
    handler  (argv){
        notes.removeNote(argv.title)
    }
})

//create a read commmand
yargs.command({
    command : "read",
    describe : "Read a note",
    builder : {
        title:{
            describe: "title of the note",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
}
)

//list command
yargs.command({
        command : "list",
        describe : "List the notes",
        handler   (){
            notes.listNotes()
        }
})
yargs.parse()
// console.log(yargs.argv)


