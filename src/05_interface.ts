type ChaiOrder = {
    type: string;
    suger: number; 
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water: number,
    milk: number,
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize {
    size: "small" | "mid" | "large"
}

class Chai implements CupSize {
    size: "small" | "mid" | "large" = "large";
}


// type Responce = {ok:true} | {ok: false}
interface Responce {
    ok: true | false
}
class myRes implements Responce{
    ok: boolean = true;
}


type TeaType = "masala" | "ginger" | "lemon"

function orderChai(tea: TeaType){
    console.log(tea);
}

orderChai("ginger")

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai2 = BaseChai & Extra

const cup: MasalaChai2 = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string,
    bio?: string
}

const u1: User = {
    username: "Aniket"
}
const u2: User = {
    username: "AniketDey",
    bio: "AniketDey.in"
}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Encoderrs",
    version: 1
}

// cfg.appName = "En"