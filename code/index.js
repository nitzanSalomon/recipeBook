let PAGES = {
    // עמוד תפריט
    menuPage : {
        topNavBar : {
            backgroundColor : `#E8E8E8`,
            img_button_x : `x_nobackground.svg`, // אודות / איקס / תפריט
            img_SearchIcon : `green_search.svg`, 
            div_topNavLineGray : ``,
            img_tillLogo : `till_logo_black.svg`,
        },
        functions : [`showMenu()`], // פונקציות שצריכות לפעול
        content : {
            recipe : ["ספר מתכונים","black_cookbook", { // תפריט נפתח
                salads : ["סלטים", "black_salads"],
                starters : ["מנות ראשונות", "black_starters"],
                sides : ["מנות ביניים", "black_sidedishes"],
                vegan : ["מנות טבעוניות", "black_vegan"],
                mainCourse : ["מנות עיקריות", "black_maincourse"],
                baking : ["קונדיטוריה", "black_baking"],
            }],
        }
    },
    // ספר מתכונים
    recipePage : { 
        topNavBar : {
            backgroundColor : `#0D635F`,
            img_button_menu : `3lines_white.svg`, // אודות / איקס / תפריט
            img_SearchIcon : `search_white.svg`, 
            div_topNavLine : ``,
            img_topNavTextIcon : `white_cookbook.svg`,
            div_topNavText_recipe : `ספר מתכונים`,
            img_tillLogo : `till_logo_white.svg`,
        },
        bottomNavBar : { // סמלים של הקטגוריות של המתכונים
            salads : ["סלטים", "green_salads", 0],
            starters : ["מנות ראשונות", "green_starters", 0],
            sides : ["מנות ביניים", "green_sidedishes", -100],
            vegan : ["מנות טבעוניות", "green_vegan", -245],
            mainCourse : ["מנות עיקריות", "green_maincourse", -450],
            baking : ["קונדיטוריה", "green_baking", -450],
        },  
        functions : [`recipePageShowTopics()`], // פונקציות שצריכות לפעול
        content : {
            salads : { // תת נושא
                'דוגמא' : {
                    pic: ``,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `20 מנות`,
                    time: `40 דקות`,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            starters : { // תת נושא
                'פשטידת-קישואים' : {
                    pic: ``,
                    description: `מתכון של סבתא מיכל`,
                    difficulty: `קל`,
                    quantity: `תבנית מלבנית`,
                    time: `שעה`,
                    ingredients : [
                        `כוס וחצי קמח תופח`,
                        `3 ביצים`,
                        `חצי כוס שמן`,
                        `מלח ופלפל`,
                        `אבקת מרק (אפשר להחליף בעוד מלח)`,
                        `אגוז מוסקט`,
                        `בצל גדול`,
                        `3 קישואים בינונים`,
                    ],
                    preparation : [
                        `קוצצים בצל ומגרדים את הקישואים לקערה.`,
                        `בקערה נפרדת טורפים את הביצים ומערבבים עם הקמח, השמן, המלח, הפלפ והאגוז מוסקט.`,
                        `מוספים לאט לאט את תערובות הירק לבלילה.`,
                        `מוזגים את הבלילה לתבנית משומנת ומקומחת ואופים במשך לפחות חצי שעה (180°).`,
                        `להשגיח ולאחר שנוצר חום מלמעלה לכסות בנייר אלומיניום.`,
                    ],
                },
                'לחם-שום' : {
                    pic: `garlicBread`,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `7 מנות`,
                    time: `3 שעות`,
                    ingredients : [
                        `3 כוסות קמח לבן`,
                        `כף שמרים יבשים`,
                        `2 כפות מלאות סוכר`,
                        `כוס מים פושרים`,
                        `רבע כוס שמן קנולה/זית`,
                        `תערובת שום: שליש כוס שמן זית, 2 כפיות שום כתוש, חצי כפית תבלין פטרוזיליה/ פטרוזיליה קצוצה, שליש כפית מלח.`,
                    ],
                    preparation : [
                        `מערבבים את הקמח עם השמרים והסוכר.`,
                        `מוזגים 3/4 כוס מים ומערבבים לתערובת בצקית פירורית.`,
                        `מוסיפים את השמן ומערבבים.`,
                        `מוסיפים בהדרגה ולפי הצורך את המים שנותרו עד לקבלת בצק אחיד.`,
                        `לשים את הבצק 2 דקות, מוסיפים מלח ולשים עוד 3-4 דקות.`,
                        `נותנים לבצק לתפוח (בין שעה לשעה וחצי, עד להכפלת הנפח).`,
                        `מרפדים תבנית עגולה בנייר אפייה, יוצרים 7 עיגולים ומניחים בתבנית לתפיחה (20 דקות).`,
                        `יוצקים מעל הכדורים 2/3 מתערובת השום ואופים בתנור שחומם מראש ל180° במשך 30 דקות.`,
                        `מוציאים מהתנור ומברישים את שאר התערובת.`,
                    ],
                },
                'דוגמא' : {
                    pic: ``,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `20 מנות`,
                    time: `40 דקות`,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            sides : { // תת נושא
                'דוגמא' : {
                    pic: ``,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `20 מנות`,
                    time: `40 דקות`,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            vegan : { // תת נושא
                'דוגמא' : {
                    pic: ``,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `20 מנות`,
                    time: `40 דקות`,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            mainCourse : { // תת נושא
                'דוגמא' : {
                    pic: ``,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `20 מנות`,
                    time: `40 דקות`,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            baking : { // תת נושא
                'דוגמא' : {
                    pic: ``,
                    description: ``,
                    difficulty: `קל`,
                    quantity: `20 מנות`,
                    time: `40 דקות`,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
        }
    },
}

// varubles
let strCurrentPage = "recipePage";
let strFormerPage = "recipePage";
let strCurrentRecipeTopic = "salads";
let nCurrentRecipeTopicNumber = 0;
let elem = document.querySelector("html");

// consts
const NUMBER_OF_RECIPE_TOPICS = 5;
const NUMBER_OF_PICTUERS = 83;


/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener(`load`, () => {
    document.querySelector(`.loader`).addEventListener("click", () => {
        document.querySelector(`.loader`).classList.add(`fade`);
        showNavBar();
        openFullscreen();
    });
    document.querySelector(`.loader`).addEventListener("click", showPage);
});

/* openFullscreen
--------------------------------------------------------------
Description: */
const openFullscreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullscreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
}


/* showPage
--------------------------------------------------------------
Description:  */
const showPage = (event) => {
    // מעלים דיב קודם שומר דיב נוכחי ומראה אותו
    document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
    if (event.currentTarget.classList[1] !== "x") {   // מטפל במקרה של תפריט
        if (strCurrentPage === "menuPage") {
            document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
            strCurrentPage = `${event.currentTarget.classList[2]}Page`;
        } else {
            strFormerPage = strCurrentPage;
            strCurrentPage = event.currentTarget.classList[1] + "Page";
        }
    } else {
        strCurrentPage = strFormerPage;
    }
    document.querySelector(`.${strCurrentPage}`).classList.remove("hidden");
    // מראה תפריט עליון
    showNavBar();
    // שומר קטגוריה נוכחית
    if (event.currentTarget.classList[0] === "menuDropDownItemContainer") {
        strCurrentRecipeTopic = event.currentTarget.classList[1];
    }
    // מראה בר תחתון
    if (PAGES[strCurrentPage].bottomNavBar) {
        let nNumberTheSymbols = 0; 
        document.querySelector(`.${strCurrentPage} .bottomNavBar`).innerHTML = "";
        for (let key of Object.keys(PAGES[strCurrentPage].bottomNavBar)) {
            let bottomNavBarTopic = El("div", 
            {attributes: {class: `bottomNavBarTopic ${key} ${nNumberTheSymbols}`}, 
            listeners : {click : eval(`${strCurrentPage}ShowTopics`)}},
            El ("img", {attributes: {class : "bottomNavBarPic" , src: `../assets/images/grapics/recipe/${PAGES[strCurrentPage].bottomNavBar[key][1]}.svg`}}),
            El ("div", {cls: "bottomNavBarText"}, PAGES[strCurrentPage].bottomNavBar[key][0])
            );
            document.querySelector(`.${strCurrentPage} .bottomNavBar`).append(bottomNavBarTopic);
            nNumberTheSymbols++;
        }
        document.querySelector(`.${strCurrentRecipeTopic}`).classList.add("bold");
        document.querySelector(`.bottomNavBar`).scrollLeft = PAGES[strCurrentPage].bottomNavBar[strCurrentRecipeTopic][2];
    }
    // קורא לפונקציות אם צריך
    if (PAGES[strCurrentPage].functions) {
        for (let i = 0; i < PAGES[strCurrentPage].functions.length; i++) {
            eval(PAGES[strCurrentPage].functions[i]);
        }
    }
    // שם מאזינים אם צריך
    if (PAGES[strCurrentPage].listeners) {
        for (key of Object.keys(PAGES[strCurrentPage].listeners)) {
            document.querySelector(`.${strCurrentPage} .${key}`).addEventListener('click', eval(PAGES[strCurrentPage].listeners[key]));
        }
    }
    if(document.querySelector(`.recipeContent`)) {
        let recipeContent = document.querySelector(`.recipeContent`);
        document.querySelector(`.recipePage`).removeChild(recipeContent);
    }
}

/* showRecipe
--------------------------------------------------------------
Description:  */
const showRecipe = (event) => {
    // שומר מתכון וקטגוריה נוכחיים
    let strCurrentRecipe = event.currentTarget.classList[1];
    if(event.currentTarget.classList[2]) {
        strCurrentRecipeTopic = event.currentTarget.classList[2];
    }
    // אם באים מחיפוש
    if (document.querySelector('.searchScreen').classList[2] === undefined || strCurrentPage === "galleryPage") {
        document.querySelector('.searchScreen').classList.add("hidden");
        // מעלים דיב קודם שומר דיב נוכחי ומראה אותו
        document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
        strCurrentPage = "recipePage";
        document.querySelector(`.${strCurrentPage}`).classList.remove("hidden");
        // מראה תפריט עליון
        showNavBar();
    }
    // מרוקן דיבים
    document.querySelector(`.recipesScrollContainer`).innerHTML = "";
    document.querySelector(`.bottomNavBar`).innerHTML = "";
    if(document.querySelector(`.recipeContent`)) {
        let recipeContent = document.querySelector(`.recipeContent`);
        document.querySelector(`.recipePage`).removeChild(recipeContent);
    }
    // יוצר מתכון ומכניס לדף
    let recipeContent = El("div", {cls : "recipeContent"},
        El("img", 
        {attributes: {class: `recipeContentPic`, 
        src : `../assets/images/foodImages/${strCurrentRecipeTopic}/${PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].pic}.jpg`}}),
        El("div", {cls : "recipeContentHeadline"}, addSpace(strCurrentRecipe)),
        El("div", {cls : "recipeContentDescription"}, PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].description),
        El("div", {cls: "recipeInfoConteiner"}, // מידע על המנה
            El("div", {classes: ["headers", "difficulty"]},
                El("div", {cls: "headerContainer"},
                    El("img",{attributes: {class: `recipeInfoPics`, 
                    src : `../assets/images/grapics/recipe/hardness_level.svg`}}),
                    "רמת קושי:",
                ),
                El("div", {cls: "recipeInfoText"},  PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].difficulty)
            ),
            El("div", {classes: ["headers", "quantity"]},
                El("div", {cls: "headerContainer"},
                    El("img",{attributes: {class: `recipeInfoPics`, 
                    src : `../assets/images/grapics/recipe/serving_size_icon.svg`}}),
                    "כמות:",
                ),
                El("div", {cls: "recipeInfoText"},  PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].quantity)
            ),
            El("div", {cls: "headers"},
                El("div", {cls: "headerContainer"},
                    El("img",{attributes: {class: `recipeInfoPics`, 
                    src : `../assets/images/grapics/recipe/timer.svg`}}),
                    "זמן הכנה:",
                ),
                El("div", {cls: "recipeInfoText"},  PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].time)
            ),
        ),
        El("div", {cls : "ingredientsContainer"},
            El("div", {cls : "recipeContentIngredientHead"}, "מצרכים"),
        ),
        El("div", {cls : "preparationsContainer"},
            El("div", {cls : "recipeContentIngredientHead"}, "אופן הכנה"),
        ),
    );
    document.querySelector(`.recipePage`).append(recipeContent);
    // מכניס מצרכים
    for (let i = 0; i < PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].ingredients.length; i++ ) {
        let ingredient = El("div", {cls : "ingredientContainer"},
        El("img",{attributes: {class: `ingredientCheckPic ingredientCheckPic${i}`, 
        src : `../assets/images/grapics/recipe/checkbox_blank.svg`},
        listeners : {click: onClickCheckBox}}),
        PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].ingredients[i]
        );
        document.querySelector(`.ingredientsContainer`).append(ingredient);
    }
    // מכניס אופן הכנה
    for (let i = 0; i < PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].preparation.length; i++ ) {
        let preparation = El("div", {cls : "preparationContainer"},
        El("img",{attributes: {class: `preparationCheckPic preparationCheckPic${i} gray`, 
        src : `../assets/images/grapics/recipe/round_checkbox.svg`},
        listeners : {click: onClickCheckBox}}),
        PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].preparation[i]
        );
        document.querySelector(`.preparationsContainer`).append(preparation);
    }
    
    // כפתור חזור
    document.querySelector(`.button_menu`).setAttribute("src", "../assets/images/grapics/general/right_arrow.svg");
    document.querySelector(`.button_menu`).classList.remove("menu");
    if (event.currentTarget.classList[0] === "galleryToRecipe") {
        document.querySelector(`.button_menu`).classList.add("gallery");
    } else {
        document.querySelector(`.button_menu`).classList.add("recipe");
    }
}

/* showrecipePageTopics
--------------------------------------------------------------
Description: change hyphen to space */
const recipePageShowTopics = (event) => {
    // שם מאזינים להחלקה ושומר את הקטגוריות במערך
    document.querySelector(`.recipesScrollContainer`).addEventListener('swiped', recipePageShowTopics);
    let arrTopic = [];
    for (let topics of Object.keys(PAGES[strCurrentPage].content)) {
        arrTopic.push(topics);
    }

    // מוריד בולד לקטגוריה הקודמת, שומר קטגוריה נוכחית ושם עליה בולד
    document.querySelector(`.recipePage .${strCurrentRecipeTopic}`).classList.remove("bold");
    document.querySelector(`.recipePage .${strCurrentRecipeTopic} .bottomNavBarPic`).style.height = "5vh";
    if(event) { // בודק אם נעשתה לחיצה או החלקה
        if (event.currentTarget.classList[0] === "bottomNavBarTopic") { 
            // בלחיצה שומר קטגוריה נוכחית ואת מספרה
            strCurrentRecipeTopic = event.currentTarget.classList[1];
            nCurrentRecipeTopicNumber = Number(event.currentTarget.classList[2]);
        } else {
            // בהחלקה בודק לאיזה כיוון ההחלקה ומשנה קטגוריה בהתאם
            if(event.detail.dir === "left" && nCurrentRecipeTopicNumber > 0) {
                nCurrentRecipeTopicNumber--;
            } else if (event.detail.dir === "right" && nCurrentRecipeTopicNumber < NUMBER_OF_RECIPE_TOPICS) {
                nCurrentRecipeTopicNumber++;
            }
            strCurrentRecipeTopic = arrTopic[nCurrentRecipeTopicNumber];
        }
    } else { // שומר את מספר הקטגוריה אם באים מהתפריט או מההתחלה
        nCurrentRecipeTopicNumber = Number(document.querySelector(`.recipePage .${strCurrentRecipeTopic}`).classList[2]);
    }

    document.querySelector(`.bottomNavBar`).scrollLeft = PAGES[strCurrentPage].bottomNavBar[strCurrentRecipeTopic][2];

    document.querySelector(`.recipePage .${strCurrentRecipeTopic}`).classList.add("bold");
    document.querySelector(`.recipePage .${strCurrentRecipeTopic} .bottomNavBarPic`).style.height = "6vh";
    // מוחק מידע קודם ומכניס תמונות וטקסט בהתאם לקטגוריה
    document.querySelector(`.recipesScrollContainer`).innerHTML = "";
    document.querySelector(`.recipesScrollContainer`).scrollTop = 0;
    for(let key of Object.keys(PAGES[strCurrentPage].content[strCurrentRecipeTopic])) {
        let recipeDisplay = El("div",
        {attributes: {class: `recipeDisplay ${key}`}, 
        listeners : {click : showRecipe}},
        El("img",
        {attributes: {class: `recipeDisplayPic`, 
        src : `../assets/images/foodImages/${strCurrentRecipeTopic}/${PAGES[strCurrentPage].content[strCurrentRecipeTopic][key].pic}.jpg`},}),
        El("div", {cls: `recipeDisplayText`}, addSpace(key))
        )
        document.querySelector(`.recipesScrollContainer`).append(recipeDisplay)
    }

}

/* onClickCheckBox
--------------------------------------------------------------
Description:  */
const onClickCheckBox = (event) => {
    if (event.currentTarget.classList[0] === "preparationCheckPic") {
        if(event.currentTarget.classList[2] === "gray") {
            document.querySelector(`.${event.currentTarget.classList[1]}`).classList.remove("gray");
        } else {
            document.querySelector(`.${event.currentTarget.classList[1]}`).classList.add("gray");
        }
    } else {
        if (document.querySelector(`.${event.currentTarget.classList[1]}`).getAttribute("src") === `../assets/images/grapics/recipe/checkbox_v.svg`) {
            document.querySelector(`.${event.currentTarget.classList[1]}`).setAttribute("src", `../assets/images/grapics/recipe/checkbox_blank.svg`);
        } else {
            document.querySelector(`.${event.currentTarget.classList[1]}`).setAttribute("src", `../assets/images/grapics/recipe/checkbox_v.svg`);
        }
    }

}

/* showMenu
--------------------------------------------------------------
Description:  */
const showMenu = () => {
    // מוחק מידע קודם ומכניס תמונות וטקסט בהתאם לקטגוריה
    document.querySelector(`.menuPage`).innerHTML = "";
    for(let key of Object.keys(PAGES.menuPage.content)) {
        let menuDisplay = El("div",{classes: [`menuContainer`, key]},
            El("div",
            {attributes: {class: `menuItem`}}, 
                El("div", {classes: [`menuItemContainer`,"container", key],
                listeners : {click : showPage}}, 
                    El("img",
                    {attributes: {class: `menuItemicon`, 
                    src : `../assets/images/grapics/menu/${PAGES.menuPage.content[key][1]}.svg`},}),
                    PAGES.menuPage.content[key][0],
                ),
                El("img",
                    {attributes: {class: `menuItemArrow ${key}`, 
                    src : `../assets/images/grapics/menu/dropdown_sideArrow.svg`},
                    listeners : {click : menuDropDown}}),
                )
        )
        document.querySelector(`.menuPage`).append(menuDisplay)
    }

}

/* menuDropDown
--------------------------------------------------------------
Description:  */
const menuDropDown = (event) => {
    let currentPage = event.currentTarget.classList[1];
    let objCurrentDropDown = PAGES.menuPage.content[event.currentTarget.classList[1]][2];
    // מראה דרופ דאון
    if (document.querySelector(`.menuPage > .${currentPage} > .menuItem`).lastChild.getAttribute("src") === "../assets/images/grapics/menu/dropdown_sideArrow.svg") {
        document.querySelector(`.menuPage > .${currentPage} > .menuItem`).lastChild.setAttribute("src", "../assets/images/grapics/menu/opened_dropdown.svg");
        for(let key of Object.keys(objCurrentDropDown)) {
            let menuDropDown = 
                El("div", {classes: [`menuDropDownItemContainer`, key, currentPage],
                listeners : {click : showPage}}, 
                    El("img",
                    {attributes: {class: `menuDropDownItemicon`, 
                    src : `../assets/images/grapics/menu/${objCurrentDropDown[key][1]}.svg`},}),
                    objCurrentDropDown[key][0],
                );
            document.querySelector(`.menuPage > .${currentPage}`).append(menuDropDown)
        }
    } else { // מעלים דרופ דאון
        document.querySelector(`.menuPage > .${currentPage} > .menuItem`).lastChild.setAttribute("src", "../assets/images/grapics/menu/dropdown_sideArrow.svg");
        let arrDropDownItems = document.querySelectorAll(`.menuPage > .${currentPage} .menuDropDownItemContainer`);
        for (let i = 0; i < arrDropDownItems.length; i++) {
            document.querySelector(`.menuPage > .${currentPage}`).removeChild(arrDropDownItems[i]);
        };
    }



}

/* onClickSearch
--------------------------------------------------------------
Description:  */
const onClickSearch = () => {
    document.querySelector('.searchScreen').classList.remove("hidden");
    document.querySelector(`.closeSearch`).addEventListener('click', () => {
        document.querySelector('.searchScreen').classList.add("hidden");
    });
    document.querySelector(`.searchBox`).addEventListener("input", onSearch);
}

/* onSearch
--------------------------------------------------------------
Description: cheack for search match and creat dropdown accordingly */
const onSearch = () => {
    document.querySelector('.dropDown').innerHTML = "";
    // עובר על כול הקטגוריות של המתכונים
    for (let keys of Object.keys(PAGES.recipePage.content)){
        // בכול קטגוריה, עובר על כול המתכונים ומחפש התאמה לחיפוש
        for (let key of Object.keys(PAGES.recipePage.content[keys])) {
            let strUserInput = document.querySelector(`.searchBox`).value;
            if(key.includes(strUserInput) && strUserInput !== ""){
                let dropDownItem = El("div", {classes : ["dropDownItem", key, keys], listeners : {click : showRecipe}}, addSpace(key))
                document.querySelector('.dropDown').append(dropDownItem);
            }
        }
    
    }
}

/* showNavBar
--------------------------------------------------------------
Description: change hyphen to space */
const showNavBar = () => {
    // מוחק מידע קודם ומכניס תפריט ניווט עליון לפי העמוד הנוכחי 
    document.querySelector(`.topNavBar`).innerHTML = "";
    for (key of Object.keys(PAGES[strCurrentPage].topNavBar)) {
        let navBarItem
        if (key.slice(0,3) === "img") {
            if (key.includes("button")) { // כפתור עליון שמאלי
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: `${key.slice(4)} ${key.slice(11)}`},
                listeners: {click : showPage}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            } else if (key === "img_SearchIcon") { // חיפוש
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: key.slice(4)},
                listeners: {click : onClickSearch}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }else if (key === "img_home"){
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: `${key.slice(4)} backToHome main`},
                listeners: {click : showPage}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }else { // סמלים
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: key.slice(4)}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }
        } else if (key.slice(0,3) === "div"){ // כותרת
            if(key.slice(4,14) === "topNavText") {
                navBarItem = El(key.slice(0,3), { classes: [key.slice(4,14), key.slice(15)], listeners : {click: showPage}}, PAGES[strCurrentPage].topNavBar[key]);
                document.querySelector(`.topNavBar`).append(navBarItem);
            } else {
                navBarItem = El(key.slice(0,3), { cls: key.slice(4)}, PAGES[strCurrentPage].topNavBar[key]);
                document.querySelector(`.topNavBar`).append(navBarItem);
            }
        } else { // צבע רקע
            document.querySelector(`.topNavBar`).style[key] = PAGES[strCurrentPage].topNavBar[key];
        }
    }
}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/-/g, ' ');
}


//   @template T
//   @param {keyof HTMLElementTagNameMap} tagName 
//   @param {{classes?: string[], cls?: string, id?: string, attributes: {[index: string]: string | { toString(): string }}, listeners: Listeners}} options 
//   @param  {...string | Node} children 
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}