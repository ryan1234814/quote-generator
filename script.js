const quotes=[
    "The only limit to our realization of tomorrow will be our doubts of today.-Franklin D Roosevelt",
    "Life is what happens when you're busy making other plans-John Lennon",
    "The only way to do great work is to love what you do- Steve Jobs",
    "It always seems impossible until it's done-Nelson Mandela",
    "Success is not final, failure is not fatal:It is the courage to continue that counts.-Winston Churchill"
];
function generateQuote(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const quoteText=document.getElementById('quote-text');
    quoteText.textContent=quotes[randomIndex];
    
}