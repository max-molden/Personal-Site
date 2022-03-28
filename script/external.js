// holds text to edit the bash prompt based on what current navbar tab you are on
var bash_prompt_text = {
    "main-template" : 'MaxwellMolden@my-site:~/main $ <div id="blinking-text">|</div>',
    "socials-template" : 'MaxwellMolden@my-site:~/socials $ <div id="blinking-text">|</div>',
    "skills-software-template" : 'MaxwellMolden@my-site:~/software-skills $ <div id="blinking-text">|</div>',
    "skills-skill2-template" : 'MaxwellMolden@my-site:~/skill2-skills $ <div id="blinking-text">|</div>',
    "aboutme-template" : 'MaxwellMolden@my-site:~/about-me $ <div id="blinking-text">|</div>',
};

// when the page loads the main tab will load with the appropriate bash text
$( document ).ready(function() {
    // get main div and the main template
    var main_div = document.getElementById('main-page');
    var main_template = document.getElementById('main-template');

    // clnoe the node of main tempalte
    var clon = main_template.content.cloneNode(true);

    // append main template to main div
    main_div.appendChild(clon);
});

// when changing tabs the show content func is called to display that template as well as to edit the bash prompt with the edit bash prompt func
function showContent(template_id) {
    // get main div and clear inner html in order to be able to add new content/templates
    var main_div = document.getElementById('main-page');
    main_div.innerHTML='';

    // get the template to show and create a node/clone
    var template_to_show = document.getElementById(template_id);
    var clon = template_to_show.content.cloneNode(true);

    // append the tmepalte
    main_div.appendChild(clon)

    // once the template is loaded we need to load any jquery stuff
    // for example, the accordion on the software skills page needs to be initialzed now
    initjQuery(template_id);

    // now update b ash prompt
    editBashPrompt(template_id);
}

// edit bash prompt based on current nav bar tab selection
function editBashPrompt(template_id) {
    // get current bashpromp text and reset it to be what is appropriate
    var main_bash_prompt = document.getElementById("my-name");
    main_bash_prompt.innerHTML = bash_prompt_text[template_id];        
}

// load jquery for specific templates
function initjQuery(template_id) {
    switch (template_id) {
        case 'skills-software-template':
            var icons = {
                header: "ui-icon-triangle-1-e",
                activeHeader: "ui-icon-triangle-1-s"
            };
            $('.software-accordion#python-acc').accordion({
                // active: false,
                collapsible: true,
                icons: icons,
            });
            $('.software-accordion#cpp-acc').accordion({
                active: false,
                collapsible: true,
                icons: icons,
            });
            $('.software-accordion#c-acc').accordion({
                active: false,
                collapsible: true,
                icons: icons,
            });
    }
}