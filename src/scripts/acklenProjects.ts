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

function AcklenProjects(robot: any) {

    // var projects = [];
    var fs = require('fs');
    var _ = require('underscore');

    var projects = JSON.parse(fs.readFileSync('project.json', 'utf8'));


    robot.respond(/create project notes (.*)/i, (msg: any) => {
        var projectName = msg.match[1];

        var myjson = { 'projectname': projectName };
        projects.push(myjson);

        fs.writeFile('project.json', JSON.stringify(projects));

        msg.reply(JSON.stringify(projects));
        msg.reply('project notes created')
    })

    robot.respond(/add (.*) to (.*) with (.*)/i, (msg: any) => {

        var objects = JSON.parse(fs.readFileSync('project.json', 'utf8'));

        var variableName: string = msg.match[1];
        var projectName: string = msg.match[2];

        var value: string = msg.match[3];

        _.each(projects, function(p) {
            if (p.projectname === projectName) {
                p[variableName] = value;
            }
        })

        fs.writeFile('project.json', JSON.stringify(projects));

        msg.reply(variableName + ' added to ' + projectName);
    })
}

export = AcklenProjects;
