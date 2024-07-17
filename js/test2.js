export async function getData(quiz){
    const res = await fetch(`../json/${quiz}.json`);

    if (res.ok){
        const data = await res.json();
        return data;
    } else{
        throw new Error('Unable to retrieve questions')
    }

}


export function questionCounter(index, questions){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}


export function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;

}