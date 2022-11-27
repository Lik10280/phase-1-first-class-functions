function receivesAFunction(callback){
    callback();
    }
    function returnsANamedFunction(){
        return function namedFunction(){
            return "LIK";
        }
    }
    function returnsAnAnonymousFunction(){
        return() =>"BRAVE";
    }