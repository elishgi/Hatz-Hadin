// פותח או סוגר את תפריט הנגישות
function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibility-menu'); // מאתר את תפריט הנגישות לפי ה-ID שלו
    menu.classList.toggle('hidden'); // מוסיף או מסיר את המחלקה "hidden" כדי להסתיר או להציג את התפריט
}

// מגדיל את גודל הטקסט בכל הדף
function increaseFontSize() {
    document.body.style.fontSize = 'larger'; // משנה את גודל הגופן של גוף העמוד לערך גדול יותר
}

// מקטין את גודל הטקסט בכל הדף
function decreaseFontSize() {
    document.body.style.fontSize = 'smaller'; // משנה את גודל הגופן של גוף העמוד לערך קטן יותר
}

// מפעיל או מכבה מצב ניגודיות גבוהה (צבעים חדים לשיפור הקריאה)
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast'); // מוסיף או מסיר את המחלקה "high-contrast" כדי לשנות את עיצוב הדף
}

// מדגיש את כל הקישורים בדף
function highlightLinks() {
    const links = document.querySelectorAll('a'); // בוחר את כל האלמנטים מהסוג <a>
    links.forEach(link => link.classList.add('highlighted-link')); // מוסיף לכל קישור מחלקה "highlighted-link" להדגשה
}

// משנה את סמן העכבר לצבע שחור
function toggleBlackCursor() {
    document.body.classList.toggle('black-cursor'); // מוסיף או מסיר את המחלקה "black-cursor" שמשנה את סמן העכבר
}

// מגדיל את סמן העכבר
function enlargeCursor() {
    document.body.classList.toggle('large-cursor'); // מוסיף או מסיר את המחלקה "large-cursor" שמשנה את גודל הסמן
}

// מדגיש כותרות בדף (מוסיף רקע צהוב וצבע טקסט שחור)
function highlightHeadings() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // בוחר את כל הכותרות (h1 עד h6)
    headings.forEach(heading => {
        heading.style.backgroundColor = 'yellow'; // משנה את צבע הרקע לצהוב
        heading.style.color = 'black'; // משנה את צבע הטקסט לשחור
    });
}

// מפעיל או מכבה מצב שחור-לבן בכל הדף
function toggleGrayscale() {
    document.body.classList.toggle('grayscale'); // מוסיף או מסיר את המחלקה "grayscale" להפעלת פילטר שחור-לבן
}

// משנה את הגופן של הדף כולו
function changeFont(font) {
    document.body.style.fontFamily = font; // משנה את משפחת הגופנים של גוף העמוד לערך שהתקבל כפרמטר
}

// מאפס את כל הגדרות הנגישות
function resetAccessibility() {
    document.body.style.fontSize = ''; // מאפס את גודל הגופן לברירת המחדל
    document.body.classList.remove('high-contrast', 'grayscale', 'large-cursor', 'black-cursor'); // מסיר את כל המחלקות הקשורות לנגישות
    document.body.style.fontFamily = 'Arial, sans-serif'; // מאפס את הגופן לגופן ברירת המחדל
    const links = document.querySelectorAll('a'); // מאתר את כל הקישורים בדף
    links.forEach(link => link.classList.remove('highlighted-link')); // מסיר את ההדגשה מכל קישור
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // מאתר את כל הכותרות
    headings.forEach(heading => {
        heading.style.backgroundColor = ''; // מאפס את צבע הרקע
        heading.style.color = ''; // מאפס את צבע הטקסט
    });
}

// מציג הודעה מוקפצת שהאפשרות בפיתוח
function showComingSoonMessage() {
    alert("אופציה זו נמצאת כרגע בפיתוח ותהיה זמינה בקרוב. תודה על הסבלנות!"); // מציג הודעה מוקפצת עם טקסט מוגדר מראש
}



