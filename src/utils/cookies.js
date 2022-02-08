import Cookies from 'js-cookie'
export function getCookies(name:string){
    if(Cookies.get(name)==''||!Cookies.get(name)){
        return false
    }else{
        return Cookies.get(name)
    }
}
export function setCookies(name:string,value:string,day?:number){
    if(day){
        Cookies.set(name, value, { expires: day})
    }else{
        Cookies.set(name, value)
    }
}
export function removeCookies(name:string):void{
    Cookies.remove(name)
}