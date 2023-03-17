// Your Script here.

var map = {
  A: "N",B: "O",C: "P",D: "Q",E: "R",F: "S",G: "T",H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  
};

var string=(aaa);

string=string.split(" ");
var ans=[];
for(var i=0;i<string.length;i++)
	{
		var wordDec=string[i];
		var wordEnc
		for(let s=0;s<wordDec.length;s++)
			{
				wordEnc+=map[wordDec.charAt(s)];
			}

		ans.push(wordEnc);
	}

return ans.join(" ");















