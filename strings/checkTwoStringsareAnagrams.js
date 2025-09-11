function checkAngramsStrings(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    const freq1={};
    const freq2={};

    for(let i=0;i<str1.length;i++){
        let char1=str1[i].toLowercase();
        let char2=str2[i].toLowercase();

        if(freq1[char1] ===undefined){
            freq1[char1]=1;
        }else{
            freq1[char1]++;
        }

        if(freq2[char2] ===undefined){
            freq2[char2]=1
        }else{
            freq2[char2]++
        }

        for(let key in freq1){
            if(freq1[key] !== freq2[key]){
                return false;
            }
        }
    }
    return true;
}


checkAngramsStrings("Bhushan","Shanbhu")