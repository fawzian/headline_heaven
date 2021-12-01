// https://newsapi.org/v2/everything?q=keyword&apiKey=

let newsData, userInput;

const $headline = $('#headline');
const $img = $('#img');
const $description = $('#description');
const $source = $('#source');
const $more = $('#more');
const $userInput = $('#input[type="text"]')


$('form').on('submit', handleGetEvent)

function handleGetEvent(event){
    event.preventDefault();
    userInput = $userInput.val();
    console.log(userInput)
    $.ajax({
        url:'https://newsapi.org/v2/top-headlines?country='+ userInput +'&apiKey=cb96460cf0014cbb8070554b23a1459d'
    }).then(
        (data) => {
        console.log(data);
        newsData = data;
        defer();
    },
    (error) => {
        console.log('bad request: ', error);
    }
    );
}

function defer(){
    $headline.text(newsData.articles[0].title);
    // $img.attr("src", newsData.articles[0].urlToImage);
    $description.text(newsData.articles[0].description);
    $source.text(newsData.articles[0].source.name);
    $more.attr("href", newsData.articles[0].url)
}

