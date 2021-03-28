export const deleteUnique = (arr)=>{
    const array = arr.split(',')
    const copyArray = array;

    array.forEach(()=>{
        copyArray.forEach((value,index)=>{
            if(copyArray.indexOf(copyArray[index])==copyArray.lastIndexOf(copyArray[index])){
                copyArray.splice(index,1)
            }
        })
    })
    return copyArray
}