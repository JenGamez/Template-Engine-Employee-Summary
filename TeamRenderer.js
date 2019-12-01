const path = require("path");
const fs = require("fs");
const apps = require("./app");
var teamMembers = apps.teamMembers;



// variable for establishing location of templates
const templatesDir = path.resolve(__dirname, "../Template-Engine-Employee-Summary/templates");

// Function to render the team info
const render = (teamMembers) => {


    // Empty array for html
    const html = [];

// Push the employee role data into the html array
    html.push(teamMembers
        .filter(teamMembers => teamMembers.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    html.push(teamMembers
        .filter(teamMembers => teamMembers.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(teamMembers
        .filter(teamMembers => teamMembers.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(""));

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());

    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());

    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());

    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    const masterHTML = replacePlaceholders(template, "team", html);
    const file = path.join(__dirname, "output", "/mainOutput.html");
    fs.writeFileSync(file, masterHTML);
  };

//   RegExp constructor creates a regular expression object for matching text with a pattern.
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };


module.exports = render;








