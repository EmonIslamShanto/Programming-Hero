function paperRequirements(FbookNumber, SbookNumber, TbookNumber){
    const FbookPage = 100;
    const SbookPage = 200;
    const TbookPage = 300;
    const TotalPage = FbookNumber * FbookPage + SbookNumber * SbookPage + TbookNumber * TbookPage;
    return TotalPage;
}

const NumberOfFirstBook = 5;
const NumberOfSeccondBook = 2;
const NumberOfThirdBook = 6;

const totalPaper = paperRequirements(NumberOfFirstBook, NumberOfSeccondBook, NumberOfThirdBook);
console.log(totalPaper);
