/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  A Hubot script written in TypeScript to show information about acklen avenue project
//
// Configuration:
//   None
//
// Commands:
//////////////////////////
// hubot acklen projects - responds
//'Active Projects:'
// -- ProjectWall //to see more detail ask to hubot: projectwall detail
// -- Drillnomics //to see more detail ask to hubot: projectwall detail
// -- Aetna
//'Prospective Projects:'
// -- airvel
// -- surgicore
//'Finished Projects:'
// -- maxor
// -- attistock
/////////////////////////////
//   hubot projectwall detail - responds
//   Detail: This is a brief information about projectwall
//   Developers: Frank, Douglas P
//   Scrum Master: Rene
//   Product Owner: Deanna Vickers
//   Trello Board: https://trello.com/c/K12tEYyG/48-template
//   Github Repository: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
//   Current Sprint: 11
//   AppVeyor: https://github.com/AcklenAvenue
//   Environments:
//    Dev -->
//    Staging -->
//    Production -->
// Author:
//   Rene Rosa <realpasro09@hotmail.com>
//   Frank Rodriguez <frankhn0801@gmail.com>
function AcklenProjects(robot) {
    var projects = [];
    var _ = require('underscore');
    robot.respond(/create new project notes (.*)/i, function (msg) {
        var projectName = msg.match[1];
        var myjson = { 'projectname': projectName };
        projects.push(myjson);
        msg.reply(JSON.stringify(projects));
        msg.reply('project notes created');
    });
    robot.respond(/add (.*) to (.*) with (.*)/i, function (msg) {
        var variableName = msg.match[1];
        var projectName = msg.match[2];
        var value = msg.match[3];
        //    var project = _.filter(projects, function(p){
        //
        //      return p.projectname === projectName;
        //    })
        _.each(projects, function (p) {
            if (p.projectname === projectName) {
                console.log(p.projectName);
                console.log(variableName);
                p[variableName] = value;
            }
        });
        //    projects.push(myjson);
        msg.reply(JSON.stringify(projects));
        //    msg.reply('project notes created');
    });
    //  robot.respond(/(.*) detail/i, (msg: any) => {
    //    var projectName = msg.match[0];
    //    //#1 R/= Projectwall
    //    msg.reply('Howdy!')
    //  })
    //
    //  robot.hear(/howdy/i, (msg: any) => {
    //    msg.send('Hola!')
    //    //
    //
}
module.exports = AcklenProjects;
