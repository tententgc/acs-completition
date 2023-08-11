import { BuffTheOp } from "./etc/preset";
import type { Game } from "./model";

/**
 * @description Change the code here to update the scoreboard
 * @param game
 */
export function gameData(game: Game) {
  game.newRound({
    fastBonus: 5,
    // preset: ScriptKiddie,
  });

  game.play([
    {
      "nickname": "Riwara",
      "userId": "4c5db8cd95e4e55b4a0abca3c25e97bf7145834",
      "score": "100%",
      "duration": "00:06:53",
      "language": "Python 3",
      "criterion": "23"
    },
    {
      "nickname": "VarinPond",
      "userId": "e07a034861180d16d6e1c9869e5f9d0b5688834",
      "score": "100%",
      "duration": "00:12:08",
      "language": "Python 3",
      "criterion": "23"
    },
    {
      "nickname": "tentenTGC",
      "userId": "2ac209250dd9e0195bd18c6cf89140554250753",
      "score": "100%",
      "duration": "00:13:13",
      "language": "Python 3",
      "criterion": "34"
    },
    {
      "nickname": "o0SoloWolf0o",
      "userId": "3fc25ef1727b6b655438dd479076fdac2934084",
      "score": "100%",
      "duration": "00:04:41",
      "language": "Python 3",
      "criterion": "39"
    },
    {
      "nickname": "WhityPAS",
      "userId": "f363324258d41e603e34d9133ef0673d3408915",
      "score": "100%",
      "duration": "00:02:12",
      "language": "Python 3",
      "criterion": "46"
    },
    {
      "nickname": "lerb",
      "userId": "560d6e726338f7ca62ad5e6f50c1447c8964674",
      "score": "80%",
      "duration": "00:00:56",
      "language": "C#",
      "criterion": "545"
    },
    {
      "nickname": "KaurM",
      "userId": "fc6e3efbe864c9703d3e0255f23d9d294527915",
      "score": "0%",
      "duration": "00:15:00",
      "language": "JavaScript",
      "criterion": "144"
    },
    {
      "nickname": "hedrig",
      "userId": "4753b86a91b1e742f0c04fc710d282336153294",
      "score": "0%",
      "duration": "00:15:00",
      "language": "N/A"
    }

  ])
  game.showSetRanking();
  game.newRound({
    langAutoBalance: "allRounds",
  });
  game.play([
    {
      "nickname": "VarinPond",
      "userId": "e07a034861180d16d6e1c9869e5f9d0b5688834",
      "score": "100%",
      "duration": "00:01:46",
      "language": "Python 3"
    },
    {
      "nickname": "Riwara",
      "userId": "4c5db8cd95e4e55b4a0abca3c25e97bf7145834",
      "score": "100%",
      "duration": "00:02:06",
      "language": "Python 3"
    },
    {
      "nickname": "tentenTGC",
      "userId": "2ac209250dd9e0195bd18c6cf89140554250753",
      "score": "100%",
      "duration": "00:02:36",
      "language": "Python 3"
    },
    {
      "nickname": "SEPIAZ",
      "userId": "1e16d4967a6892a17c971ff6df6b46c64783144",
      "score": "100%",
      "duration": "00:05:15",
      "language": "Python 3"
    },
    {
      "nickname": "o0SoloWolf0o",
      "userId": "3fc25ef1727b6b655438dd479076fdac2934084",
      "score": "0%",
      "duration": "00:05:55",
      "language": "Python 3"
    }
  ])

  // game.finishSet();

  game.newRound({
    langAutoBalance: "allRounds",
  });

  game.play([
    {
      "nickname": "spleb",
      "userId": "15b1f81fb8142abe2095663dbe9e19720868193",
      "score": "100%",
      "duration": "00:01:55",
      "language": "Python 3",
      "criterion": "41"
    },
    {
      "nickname": "VarinPond",
      "userId": "e07a034861180d16d6e1c9869e5f9d0b5688834",
      "score": "100%",
      "duration": "00:12:39",
      "language": "Python 3",
      "criterion": "41"
    },
    {
      "nickname": "praveenkumarreddy",
      "userId": "8059120bbd8af2b6967aae3ac77d6bc50667664",
      "score": "100%",
      "duration": "00:02:04",
      "language": "Python 3",
      "criterion": "53"
    },
    {
      "nickname": "JohnyDaison",
      "userId": "1065f58b5b223f0dc7a90a547ec3ddcf9977483",
      "score": "100%",
      "duration": "00:02:00",
      "language": "JavaScript",
      "criterion": "83"
    },
    {
      "nickname": "tentenTGC",
      "userId": "2ac209250dd9e0195bd18c6cf89140554250753",
      "score": "100%",
      "duration": "00:14:18",
      "language": "Python 3",
      "criterion": "99"
    },
    {
      "nickname": "Martche",
      "userId": "dbf21a04afb15fadba49b7b527d76a9d0893125",
      "score": "100%",
      "duration": "00:00:35",
      "language": "Python 3",
      "criterion": "291"
    },
    {
      "nickname": "Guzsen1617",
      "userId": "6feed2091a3cf27696155bae76fc9e5a0028415",
      "score": "100%",
      "duration": "00:13:02",
      "language": "Python 3",
      "criterion": "347"
    },
    {
      "nickname": "SEPIAZ",
      "userId": "1e16d4967a6892a17c971ff6df6b46c64783144",
      "score": "0%",
      "duration": "00:14:56",
      "language": "Python 3",
      "criterion": "50"
    }
  ])
  game.showSetRanking();
  game.finishSet();

  game.goLive();
}
