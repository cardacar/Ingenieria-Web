export const pangram = (str) => {
  const alphabet='abcdefghiklmnñopqrstuvwxyz'
  const arrayAlphabet= alphabet.split('')
    for(let i in arrayAlphabet){
        if (!(str.includes(arrayAlphabet[i]))){
            return false
        }
    }
    return true;
}