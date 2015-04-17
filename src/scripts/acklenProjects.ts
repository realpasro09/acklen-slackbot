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

  var projectDetail ={
    ProjectWall: {
      Active: true,
      Detail: 'This is a brief of ProjectWall',
      Current Sprint: 11,
      Developers: {'Frank','Douglas P', 'Aida', 'Viktor'},
      Scrum Master: {'Rene'},
      QAs: {'Elder', 'Dorian'},
      Trello: 'https://trello.com/b/PYGBctHp/projectwall',
      Github: 'https://github.com/AcklenAvenue/ProjectWall',
      Appveyor: 'https://ci.appveyor.com/project/bsommardahl/projectwall',
      Environments: [
        {Dev: 'projectwalldev.azurewebsites.net'},
        {Staging: 'projectwalldev.azurewebsites.net'},
        {Production: 'http://projectwall.net/'}]
    },
    CaredFor:{},
    Maxor: {}
  }

  robot.respond(/(.*) detail/i, (msg: any) => {
    var projectName = msg.match[0];

    msg.reply('Howdy!')
  })

  robot.hear(/howdy/i, (msg: any) => {
    msg.send('Hola!')
  })
}

export = AcklenProjects;
