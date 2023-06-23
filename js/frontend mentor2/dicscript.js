const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
var result = document.getElementById("result");
const btn = document.getElementById("SearchButton");
btn.addEventListener("click", () => {
  console.log("tfyhudjfk");
  result.innerHTML="";
  const InputValue = document.getElementById("searchInput").value;
  fetch(`${url}${InputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    if(data.length){
        data.map((item)=>{
          let newData=document.createElement('h1');
          newData.className="heading";
          newData.innerHTML=item.word;
          result.appendChild(newData);
          
          let phonetic=document.createElement('h3');
          phonetic.className="phoneticClassName";
          phonetic.innerHTML=item.phonetic;
          result.appendChild(phonetic); 
        

          item.meanings.map((nxtItem)=>{
            let pof=document.createElement('h4');
            pof.className="pofClassName";
            pof.innerHTML=nxtItem.partOfSpeech;
            result.appendChild(pof);

            let definitionHeading=document.createElement('h4');
            definitionHeading.className="definitionHeadingclassName";
            definitionHeading.innerHTML="Meaning";
            result.appendChild(definitionHeading);

            nxtItem.definitions.map((defi)=>{
              let definition=document.createElement('p');
              definition.className="definitionClassName";
              definition.innerHTML=defi.definition;
              result.appendChild(definition);
            });

            let synonymHeading=document.createElement('h4');
            synonymHeading.className="synonymHeadingclassName";
            synonymHeading.innerHTML="Synonyms";
            result.appendChild(synonymHeading);

            let synonym=document.createElement('p');
            synonym.className="synonymsClassName";
            synonym.innerHTML=nxtItem.synonyms;
            result.appendChild(synonym);
            
          });

          let sourceHeading=document.createElement('h4');
          sourceHeading.className="sourceHeadingclassName";
          sourceHeading.innerHTML="Source";
          result.appendChild(sourceHeading);

          let source=document.createElement('p');
          source.className="sourceClassName";
          source.innerHTML=item.sourceUrls;
          result.appendChild(source);

        }
        )
    }
    else{
      let errorMessage1=document.createElement('p');
      errorMessage1.className="errorMessage1Class";
      errorMessage1.innerHTML=data.title;
      result.appendChild(errorMessage1);
      let errorMessage2=document.createElement('p');
      errorMessage2.className="errorMessage2Class";
      errorMessage2.innerHTML=data.message;
      result.appendChild(errorMessage2);
      let errorMessage3=document.createElement('p');
      errorMessage3.className="errorMessage3Class";
      errorMessage3.innerHTML=data.resolution;
      result.appendChild(errorMessage3);
    }
  
});

});


// let words=document.getElementById("word");
// let img=document.getElementById("btn");
// img.addEventListener("click", (data) =>{
//     data.preventDefault();
//     console.log(words.value)
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words.value}`)
//     .then((response)=>response.json())
//     .then(data=>{
//         console.log(data)
//         if(data.length){
//             data.map((item)=>{
//                 let newData=document.createElement('h1');
//                 newData.className="heading";
//                 newData.innerHTML=item.word;
//                 result.appendChild(newData);

//                 let phonetic=document.createElement('h4');
//                 phonetic.className="phoneticClass";
//                 phonetic.innerHTML=item.phonetic;
//                 result.appendChild(phonetic);

//                 item.meanings.map((item2)=>{
//                     let pof=document.createElement('h4');
//                     pof.className="pofClass";
//                     pof.innerHTML=item2.partsofSpeech;
//                     result.appendChild(pof);
//                 })
//                 let definitionHead=document.createElement('h4');
//                 definitionHead.className=" definitionHeadclassName"
//                 definitionHead.innerHTML=Heading;
//                 definitionHead.appendChild(phonectics);
                
//                 item2.definitions.map((defi)=>{
//                     let definition=document.createElement('p')
//                     definition.className="definitionClassName";
//                     definition.innerHTML=defi.definition;
//                     result.appendChild(definition);
//                 })
//                 let synonymHeading=document.createElement('h4');
//                 synonymHeading.className="synonymHeadingclassName";
//                 synonymHeading.innerHTML="Synonyms";
//                 synonymHeading.appendChild(synonymHeading)
                      
//     let synonyms=document.createElement('p');
//     synonyms.className="synonymsclassName";
//     synonyms.innerHTML="item2.synonym";
//     result.appendChild(synonyms)

//     let sourceHeading=document.createElement('h4');
//     sourceHeading.className="sourceHeadingClassName";
//     sourceHeading.innerHTML="Source";
//     result.appendChild(sourceHeading);

//     let source=document.createElement('h4');
//     source.className="sourceClassName";
//     source.innerHTML="item.sourceUrls";
//     result.appendChild(source);
// }) 
          
//         }
//         else{
//             let errorMessage1=document.createElement('p');
//             errorMessage1.className="errorMessage1Class";
//             errorMessage1.innerHTML=data.title;
//             result.appendChild(errorMessage1);
//             let errorMessage2=document.createElement('p');
//             errorMessage2.className="errorMessage2Class";
//             errorMessage2.innerHTML=data.message;
//             result.appendChild(errorMessage2);
//             let errorMessage3=document.createElement('p');
//             errorMessage3.className="errorMessage3Class";
//             errorMessage3.innerHTML=data.resolution;
//             result.appendChild(errorMessage3);
            
//         }
//     })
// })
           
