//Stores the text in each text area on save click

var txtProfileText = "not saved";
var txtEducationText = "not saved";
var txtExperienceText = "not saved";
var txtSkillsText = "not saved";
var txtInterestsText = "not saved";

//stores the current text in the box

var txtProfileTextLive;
var txtEducationTextLive;
var txtExperienceTextLive;
var txtSkillsTextLive;
var txtInterestsTextLive;

//if text hasnt been entered into a text area then the clearall button wont show the restore button

var txtProfileTextCleared;
var txtEducationTextCleared;
var txtExperiencedTextCleared;
var txtSkillsTextCleared;
var txtInterestsTextCleared;

//the percentage of bar that is complete

var barProfileComplete;
var barEducationComplete;
var barExperienceComplete;
var barSkillsComplete;
var barInterestsComplete;

//stores whether or not the panel is open

var hoverProfile = 1;
var hoverExperience = 1;
var hoverSkills = 1;
var hoverEducation = 1;
var hoverInterests = 1;

//stores which buttons should be shown more information can be found 

var hoverProfileButtons = 0;
var hoverExperienceButtons = 0;
var hoverSkillsButtons = 0;
var hoverEducationButtons = 0;
var hoverInterestsButtons = 0;

//checks to see if the clear all button has been clicked

clearAllHasBeenClicked = 0;

$(document).ready(function () {

    //hiding buttons and bars on launch

    //hides profile
    $("#btnSaveProfile").hide();
    $("#btnClearProfile").hide();
    $("#btnRestoreProfile").hide();
    $("#prgProfile").hide();

    //hides experience
    $("#btnSaveExperience").hide();
    $("#btnClearExperience").hide();
    $("#btnRestoreExperience").hide();
    $("#prgExperience").hide();

    //hides education
    $("#btnSaveEducation").hide();
    $("#btnClearEducation").hide();
    $("#btnRestoreEducation").hide();
    $("#prgEducation").hide();

    //hides skills
    $("#btnSaveSkills").hide();
    $("#btnClearSkills").hide();
    $("#btnRestoreSkills").hide();
    $("#prgSkills").hide();

    //hides interests
    $("#btnSaveInterests").hide();
    $("#btnClearInterests").hide();
    $("#btnRestoreInterests").hide();
    $("#prgInterests").hide();

    //hidws clearall and save all button
    $("#btnClearAll").hide();
    $("#btnSaveAll").hide();

    //shows profile panel but hides the other panels

    $("#pnlProfileBody").hide();
    $("#pnlExperienceBody").hide();
    $("#pnlEducationBody").hide();
    $("#pnlSkillsBody").hide();
    $("#pnlInterestsBody").hide();

    $("#pnlProfileHeader").click(pnlPrimaryslideDown)
    $("#pnlExperienceHeader").click(pnlExperienceslideDown);
    $("#pnlSkillsHeader").click(pnlSkillsslideDown);
    $("#pnlInterestsHeader").click(pnlInterestsslideDown);
    $("#pnlEducationHeader").click(pnlEducationslideDown);

    //enables save button on keypress

    $("#txtProfile").keypress(keypressProfile).keypress(showClearAllButton);
    $("#txtExperience").keypress(keypressExperience).keypress(showClearAllButton);
    $("#txtEducation").keypress(keypressEducation).keypress(showClearAllButton);
    $("#txtSkills").keypress(keypressSkills).keypress(showClearAllButton);
    $("#txtInterests").keypress(keypressInterests).keypress(showClearAllButton);

    //save clear restore functions

    $("#btnSaveProfile").click(saveProfile);
    $("#btnClearProfile").click(clearProfile);
    $("#btnSaveEducation").click(saveEducation);
    $("#btnClearEducation").click(clearEducation);
    $("#btnSaveExperience").click(saveExperience);
    $("#btnClearExperience").click(clearExperience);
    $("#btnSaveSkills").click(saveSkills);
    $("#btnClearSkills").click(clearSkills);
    $("#btnSaveInterests").click(saveInterests);
    $("#btnClearInterests").click(clearInterests);
    $("#btnClearAll").click(clearAll);
    $("#btnRestoreProfile").click(restoreProfile);
    $("#btnRestoreEducation").click(restoreEducation);
    $("#btnRestoreInterests").click(restoreInterests);
    $("#btnRestoreExperience").click(restoreExperience);
    $("#btnRestoreSkills").click(restoreSkills);
    $("#btnRestoreProfile").click(restoreProfile);

    //progressbars

    $("#txtProfile").keypress(txtProfileBar);
    $("#btnClearProfile").click(txtProfileBar);
    $("#btnRestoreProfile").click(txtProfileBar);

    $("#txtEducation").keypress(txtEducationBar);
    $("#btnClearEducation").click(txtEducationBar);
    $("#btnRestoreEducation").click(txtEducationBar);

    $("#txtExperience").keypress(txtExperienceBar);
    $("#btnClearExperience").click(txtExperienceBar);
    $("#btnRestoreExperience").click(txtExperienceBar);

    $("#txtSkills").keypress(txtSkillsBar);
    $("#btnClearSkills").click(txtSkillsBar);
    $("#btnRestoreSkills").click(txtSkillsBar);

    $("#txtInterests").keypress(txtInterestsBar);
    $("#btnClearInterests").click(txtInterestsBar);
    $("#btnRestoreInterests").click(txtInterestsBar);



    //testing#
    $("#testbutton").click(testfunction);


});

function testfunction() {

    console.log(hoverInterestsButtons);
    console.log(hoverEducationButtons);
    console.log(hoverProfileButtons);
    console.log(hoverSkillsButtons);
    console.log(hoverExperienceButtons);
}

//hide button functions 0=none 1=save 2=all 3=save+restore

function keypressProfile() {

    if (hoverProfileButtons == 0) {
        hoverProfileButtons = 1;
    }

    hideProfileButtons();

}

function hideProfileButtons() {

    if (hoverProfileButtons == 0) {
        $("#btnSaveProfile").fadeOut();
        $("#btnClearProfile").fadeOut();
        $("#btnRestoreProfile").fadeOut();
    }

    if (hoverProfileButtons == 1) {
        $("#btnSaveProfile").fadeIn();
        $("#btnClearProfile").fadeOut();
        $("#btnRestoreProfile").fadeOut();
    }

    if (hoverProfileButtons == 2) {
        $("#btnSaveProfile").fadeIn();
        $("#btnClearProfile").fadeIn();
        $("#btnRestoreProfile").fadeIn();
    }

    if (hoverProfileButtons == 3) {
        $("#btnSaveProfile").fadeIn();
        $("#btnClearProfile").fadeOut();
        $("#btnRestoreProfile").fadeOut();
        $("#btnRestoreProfile").fadeIn();
    }
}

function keypressExperience() {

    if (hoverExperienceButtons == 0) {
        hoverExperienceButtons = 1;
    }

    hideExperienceButtons();
}

function hideExperienceButtons() {

    if (hoverExperienceButtons == 0) {
        $("#btnSaveExperience").fadeOut();
        $("#btnClearExperience").fadeOut();
        $("#btnRestoreExperience").fadeOut();
    }

    if (hoverExperienceButtons == 1) {
        $("#btnSaveExperience").fadeIn();
        $("#btnClearExperience").fadeOut();
        $("#btnRestoreExperience").fadeOut();
    }

    if (hoverExperienceButtons == 2) {
        $("#btnSaveExperience").fadeIn();
        $("#btnClearExperience").fadeIn();
        $("#btnRestoreExperience").fadeIn();
    }

    if (hoverExperienceButtons == 3) {
        $("#btnSaveExperience").fadeIn();
        $("#btnClearExperience").fadeOut();
        $("#btnRestoreExperience").fadeOut();
        $("#btnRestoreExperience").fadeIn();
    }
}

function keypressEducation() {

    if (hoverEducationButtons == 0) {
        hoverEducationButtons = 1;
    }

    hideEducationButtons();
}

function hideEducationButtons() {

    if (hoverEducationButtons == 0) {
        $("#btnSaveEducation").fadeOut();
        $("#btnClearEducation").fadeOut();
        $("#btnRestoreEducation").fadeOut();
    }

    if (hoverEducationButtons == 1) {
        $("#btnSaveEducation").fadeIn();
        $("#btnClearEducation").fadeOut();
        $("#btnRestoreEducation").fadeOut();
    }

    if (hoverEducationButtons == 2) {
        $("#btnSaveEducation").fadeIn();
        $("#btnClearEducation").fadeIn();
        $("#btnRestoreEducation").fadeIn();
    }

    if (hoverEducationButtons == 3) {
        $("#btnSaveEducation").fadeIn();
        $("#btnClearEducation").fadeOut();
        $("#btnRestoreEducation").fadeOut();
        $("#btnRestoreEducation").fadeIn();
    }
}

function keypressSkills() {

    if (hoverSkillsButtons == 0) {
        hoverSkillsButtons = 1;
    }

    hideSkillsButtons();
}

function hideSkillsButtons() {

    if (hoverSkillsButtons == 0) {
        $("#btnSaveSkills").fadeOut();
        $("#btnClearSkills").fadeOut();
        $("#btnRestoreSkills").fadeOut();
    }

    if (hoverSkillsButtons == 1) {
        $("#btnSaveSkills").fadeIn();
        $("#btnClearSkills").fadeOut();
        $("#btnRestoreSkills").fadeOut();
    }

    if (hoverSkillsButtons == 2) {
        $("#btnSaveSkills").fadeIn();
        $("#btnClearSkills").fadeIn();
        $("#btnRestoreSkills").fadeIn();
    }

    if (hoverSkillsButtons == 3) {
        $("#btnSaveSkills").fadeIn();
        $("#btnClearSkills").fadeOut();
        $("#btnRestoreSkills").fadeOut();
        $("#btnRestoreSkills").fadeIn();
    }
}

function keypressInterests() {

    if (hoverInterestsButtons == 0) {
        hoverInterestsButtons = 1;
    }

    hideInterestsButtons();
}

function hideInterestsButtons() {

    if (hoverInterestsButtons == 0) {
        $("#btnSaveInterests").fadeOut();
        $("#btnClearInterests").fadeOut();
        $("#btnRestoreInterests").fadeOut();
        console.log("this worked 222");
    }

    if (hoverInterestsButtons == 1) {
        $("#btnSaveInterests").fadeIn();
        $("#btnClearInterests").fadeOut();
        $("#btnRestoreInterests").fadeOut();
    }

    if (hoverInterestsButtons == 2) {
        $("#btnSaveInterests").fadeIn();
        $("#btnClearInterests").fadeIn();
        $("#btnRestoreInterests").fadeIn();
    }

    if (hoverInterestsButtons == 3) {
        $("#btnSaveInterests").fadeIn();
        $("#btnClearInterests").fadeOut();
        $("#btnRestoreInterests").fadeOut();
        $("#btnRestoreInterests").fadeIn();
    }
}

//shows the save all button and the clear all button or hides it if theyre not useful

function showClearAllButton() {

    if (hoverProfileButtons > 0) {
        $("#btnClearAll").fadeIn();
        $("#btnSaveAll").fadeIn();
    }
    if (hoverEducationButtons > 0) {
        $("#btnClearAll").fadeIn();
        $("#btnSaveAll").fadeIn();
    }
    if (hoverExperienceButtons > 0) {
        $("#btnClearAll").fadeIn();
        $("#btnSaveAll").fadeIn();
    }
    if (hoverInterestsButtons > 0) {
        $("#btnClearAll").fadeIn();
        $("#btnSaveAll").fadeIn();
    }
    if (hoverSkillsButtons > 0) {
        $("#btnClearAll").fadeIn();
        $("#btnSaveAll").fadeIn();
    }
    if (hoverProfileButtons == 0 && hoverEducationButtons == 0 && hoverExperienceButtons == 0 && hoverSkillsButtons == 0 && hoverInterestsButtons == 0) {
        $("btnClearAll").fadeOut();
        $("#btnSaveAll").fadeOut();
    }
}

//so they slideDown and slideUp

function pnlPrimaryslideDown() {
    if (hoverProfile == 0) {
        $("#pnlProfileBody").slideUp();
        hoverProfile = 1;
    }
    else {
        $("#pnlProfileBody").slideDown();
        hoverProfile = 0;
    }
}

function pnlExperienceslideDown() {
    if (hoverExperience == 0) {
        $("#pnlExperienceBody").slideUp();
        hoverExperience = 1;
    }
    else {
        $("#pnlExperienceBody").slideDown();
        hoverExperience = 0;
    }
}

function pnlEducationslideDown() {
    if (hoverEducation == 0) {
        $("#pnlEducationBody").slideUp();
        hoverEducation = 1;
    }
    else {
        $("#pnlEducationBody").slideDown();
        hoverEducation = 0;
    }
}

function pnlInterestsslideDown() {
    if (hoverInterests == 0) {
        $("#pnlInterestsBody").slideUp();
        hoverInterests = 1;
    }
    else {
        $("#pnlInterestsBody").slideDown();
        hoverInterests = 0;
    }
}

function pnlSkillsslideDown() {
    if (hoverSkills == 0) {
        $("#pnlSkillsBody").slideUp();
        hoverSkills = 1;
    }
    else {
        $("#pnlSkillsBody").slideDown();
        hoverSkills = 0;
    }
}

//bar progress functions

function txtProfileBar() {

    $("#prgProfile").fadeIn();

    txtProfileTextLive = $("#txtProfile").val();
    barProfileComplete = (txtProfileTextLive.length);

    if (barProfileComplete > 0 && barProfileComplete < 34) {
        $("#prgProfile").attr('class', 'progress-bar progress-bar-danger');
    }

    if (barProfileComplete > 33 && barProfileComplete < 66) {
        $("#prgProfile").attr('class', 'progress-bar progress-bar-warning');
    }

    if (barProfileComplete > 66) {
        $("#prgProfile").attr('class', 'progress-bar progress-bar-success');
    }

    $("#prgProfile").css("width", barProfileComplete + "%");
}

function txtEducationBar() {

    $("#prgEducation").fadeIn();

    txtEducationTextLive = $("#txtEducation").val();
    barEducationComplete = (txtEducationTextLive.length);

    if (barEducationComplete > 0 && barEducationComplete < 34) {
        $("#prgEducation").attr('class', 'progress-bar progress-bar-danger');
    }

    if (barEducationComplete > 33 && barEducationComplete < 66) {
        $("#prgEducation").attr('class', 'progress-bar progress-bar-warning');
    }

    if (barEducationComplete > 66) {
        $("#prgEducation").attr('class', 'progress-bar progress-bar-success');
    }

    $("#prgEducation").css("width", barEducationComplete + "%");
}

function txtExperienceBar() {

    $("#prgExperience").fadeIn();

    txtExperienceTextLive = $("#txtExperience").val();
    barExperienceComplete = (txtExperienceTextLive.length);

    if (barExperienceComplete > 0 && barExperienceComplete < 34) {
        $("#prgExperience").attr('class', 'progress-bar progress-bar-danger');
    }

    if (barExperienceComplete > 33 && barExperienceComplete < 66) {
        $("#prgExperience").attr('class', 'progress-bar progress-bar-warning');
    }

    if (barExperienceComplete > 66) {
        $("#prgExperience").attr('class', 'progress-bar progress-bar-success');
    }

    $("#prgExperience").css("width", barExperienceComplete + "%");
}

function txtSkillsBar() {

    $("#prgSkills").fadeIn();

    txtSkillsTextLive = $("#txtSkills").val();
    barSkillsComplete = (txtSkillsTextLive.length);

    if (barSkillsComplete > 0 && barSkillsComplete < 34) {
        $("#prgSkills").attr('class', 'progress-bar progress-bar-danger');
    }

    if (barSkillsComplete > 33 && barSkillsComplete < 66) {
        $("#prgSkills").attr('class', 'progress-bar progress-bar-warning');
    }

    if (barSkillsComplete > 66) {
        $("#prgSkills").attr('class', 'progress-bar progress-bar-success');
    }

    $("#prgSkills").css("width", barSkillsComplete + "%");
}

function txtInterestsBar() {

    $("#prgSkills").fadeIn();

    txtInterestsTextLive = $("#txtInterests").val();
    barInterestsComplete = (txtInterestsTextLive.length);

    if (barInterestsComplete > 0 && barInterestsComplete < 34) {
        $("#prgInterests").attr('class', 'progress-bar progress-bar-danger');
    }

    if (barInterestsComplete > 33 && barInterestsComplete < 66) {
        $("#prgInterests").attr('class', 'progress-bar progress-bar-warning');
    }

    if (barInterestsComplete > 66) {
        $("#prgInterests").attr('class', 'progress-bar progress-bar-success');
    }

    $("#prgInterests").css("width", barInterestsComplete + "%");
}

//restore functions, takes relevent string and changes the text into the relevent text area into the string

function restoreProfile() {

    $("#txtProfile").val(txtProfileText);

    hoverProfileButtons = 2;
    hideProfileButtons();

}

function restoreEducation() {

    $("#txtEducation").val(txtEducationText);

    hoverEducationButtons = 2;
    hideEducationButtons();
}

function restoreSkills() {

    $("#txtSkills").val(txtSkillsText);

    hoverSkillsButtons = 2;
    hideSkillsButtons();

}

function restoreInterests() {

    $("#txtInterests").val(txtInterestsText);

    hoverInterestsButtons = 2;
    hideInterestsButtons();
}

function restoreExperience() {

    $("#txtExperience").val(txtExperienceText);

    hoverExperienceButtons = 2;
    hideExperienceButtons();
}

//save and clear buttons. Save function takes the input from the text area and stores it as a string. 
//Clear functions make the text areas in the panels blank 

function saveProfile() {
    txtProfileText = $("#txtProfile").val();
    console.log("the current profile text is" + txtProfileText);

    hoverProfileButtons = 2;
    hideProfileButtons();



}

function clearProfile() {
    $("#txtProfile").val('');

    if (clearAllHasBeenClicked == 0) {
        hoverProfileButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtProfileText != "not saved") {
        hoverProfileButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtProfileText != "not saved") {
        hoverProfileButtons = 0;
    }

    hideProfileButtons();

}

function saveEducation() {
    txtEducationText = $("#txtEducation").val();

    hoverEducationButtons = 2;
    hideEducationButtons();
}

function clearEducation() {
    $("#txtEducation").val('');

    if (clearAllHasBeenClicked == 0) {
        hoverEducationButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtEducationText != "not saved") {
        hoverEducationButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtEducationText == "not saved") {
        hoverEducationButtons = 0;
    }

    hideEducationButtons();
}

function saveExperience() {
    txtExperienceText = $("#txtExperience").val();


    hoverExperienceButtons = 2;
    hideExperienceButtons();
}

function clearExperience() {
    $("#txtExperience").val('');

    if (clearAllHasBeenClicked == 0) {
        hoverExperienceButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtExperienceText != "not saved") {
        hoverExperienceButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtExperienceText == "not saved") {
        hoverExperienceButtons = 0;
    }

    hideExperienceButtons();
}

function saveSkills() {
    txtSkillsText = $("#txtSkills").val();

    hoverSkillsButtons = 2;
    hideSkillsButtons();
}

function clearSkills() {
    $("#txtSkills").val('');

    if (clearAllHasBeenClicked == 0) {
        hoverSkillsButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtSkillsText != "not saved") {
        hoverSkillsButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtSkillsText == "not saved") {
        hoverSkillsButtons = 0;
    }

    hideSkillsButtons();
}

function saveInterests() {
    txtInterestsText = $("#txtInterests").val();

    hoverInterestsButtons = 2;
    hideInterestsButtons();
}

function clearInterests() {
    $("#txtInterests").val('');

    if (clearAllHasBeenClicked == 0) {
        hoverInterestsButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtInterestsBar != "not saved") {
        hoverInterestButtons = 3;
    }

    if (clearAllHasBeenClicked == 1 && txtInterestsBar == "not saved") {
        hoverInterestsButtons = 0;
    }

    hideInterestsButtons();
}

// clear all button clears all boxes by calling each clear function

function clearAll() {

    clearAllHasBeenClicked = 1;

    hoverInterestsButtons = 1;
    hoverEducationButtons = 1
    hoverProfileButtons = 1;
    hoverExperienceButtons = 1;

    clearProfile();
    clearEducation();
    clearExperience();
    clearSkills();
    clearInterests();

    clearAllHasBeenClicked = 0;

    refreshAllBars();

}

function saveAll() {

    saveEducation();
    saveExperience();
    saveInterests();
    saveProfile();
    saveSkills();
}

function refreshAllBars() {

    txtEducationBar();
    txtProfileBar();
    txtExperienceBar();
    txtInterestsBar();
    txtSkillsBar();

}

function refreshAllButtons() {

    hideProfileButtons();
    hideEducationButtons();
    hideExperienceButtons();
    hideSkillsButtons();
    hideInterestsButtons();

}

function pgrClickRight() {
    console.log("Clicked Right")

    panelLoaded++
    whichPanelLoaded();
}

function pgrClickLeft() {
    console.log("Clicked Left")
    panelLoaded--
    whichPanelLoaded();
}