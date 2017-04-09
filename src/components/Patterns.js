import React, { Component } from 'react';
import Pattern from './Pattern';

class Patterns extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <div className="legend-patterns">
          <div className="legend-pattern legend-pattern--run">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">Run-based</div>
          </div>
          <div className="legend-pattern legend-pattern--tri">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">Tri-based</div>
          </div>
          <div className="legend-pattern legend-pattern--quad">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">Quad-based</div>
          </div>
          <div className="legend-pattern legend-pattern--1-9-honors">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">1/9/Honors-based</div>
          </div>
          <div className="legend-pattern legend-pattern--suit">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">Suit-based</div>
          </div>
          <div className="legend-pattern legend-pattern--melding">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">Melding-based</div>
          </div>
          <div className="legend-pattern legend-pattern--irregular">
            <div className="legend-pattern-block"></div>
            <div className="legend-pattern-label">Irregular</div>
          </div>
        </div>
        <Pattern
          tiles={['1-sou', '2-sou', '3-sou', '4-man', '5-man', '6-man', '3-pin', '4-pin', '5-pin', '7-man', '8-man', '9-man', 'Back', 'Back']}
          score="5"
          name="PINFU"
          label="4 sequence sets"
          type="run"
        />

        <div className="Patterns-group Patterns-group--concealed">
          <Pattern
            tiles={['4-sou', '5-sou', '6-sou', '3-man', '4-man', '5-man', '9-sou', '9-sou', '9-sou', '7-pin', '7-pin', '7-pin', '8-sou', '8-sou']}
            score="5"
            name="Menzenchin"
            label="All concealed sets · may win on discard"
            type="melding"
          />
        </div>

        <Pattern
          tiles={['2-man', '3-man', '4-man', '4-pin', '5-pin', '6-pin', '5-sou', '5-sou', '5-sou', '7-pin', '7-pin', '7-pin', '8-sou', '8-sou']}
          score="5"
          name="Tan Yaochu"
          label="All sets contain no 1, 9 or Honors"
          type="suit"
        />

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['4-man', '5-man', '6-man', '7-man', '8-man', '9-man', '1-man', '1-man', '1-man', 'west-wind', 'west-wind', 'west-wind', 'white-dragon', 'white-dragon']}
            score="40"
            name="Honitsu"
            label="All of same suit or Honors"
            type="suit"
          />
          <Pattern
            tiles={['1-sou', '2-sou', '3-sou', '2-sou', '3-sou', '4-sou', '5-sou', '5-sou', '5-sou', '8-sou', '8-sou', '8-sou', '1-sou', '1-sou']}
            score="80"
            name="Chinitsu"
            label="All of same suit · no Honors"
            type="suit"
          />
        </div>

        <Pattern
          tiles={['1-pin', '1-pin', '1-pin', '2-pin', '3-pin', '4-pin', '5-pin', '6-pin', '7-pin', '8-pin', '9-pin', '9-pin', '9-pin', '8-pin']}
          score="480"
          name="Churen Poto"
          label="one suit: 1-1-1-2-3-4-5-6-7-8-9-9-9 + match"
          type="suit"
        />
        <Pattern
          tiles={['green-dragon', 'green-dragon', 'green-dragon', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back']}
          score="10"
          name="Fanpai"
          label="Tri/Quad of own seat Wind or any Dragon"
          type="1-9-honors"
        />

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['white-dragon', 'white-dragon', 'white-dragon', 'green-dragon', 'green-dragon', 'green-dragon', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'red-dragon', 'red-dragon']}
            score="40 (+20)"
            name="Sho Sangen"
            label="2 Triplets Dragons, pair Dragons"
            type="1-9-honors"
          />
          <Pattern
            tiles={['white-dragon', 'white-dragon', 'white-dragon', 'red-dragon', 'red-dragon', 'red-dragon', 'green-dragon', 'green-dragon', 'green-dragon', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="130 (+30)"
            name="Dai Sangen"
            label="3 Triplets Dragons"
            type="1-9-honors"
          />
        </div>

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['north-wind', 'north-wind', 'north-wind', 'west-wind', 'west-wind', 'west-wind', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'east-wind', 'east-wind']}
            score="30"
            name="Sho Sanfu"
            label="2 Triplets/Quad + pair Winds"
            type="1-9-honors"
          />
          <Pattern
            tiles={['east-wind', 'east-wind', 'east-wind', 'north-wind', 'north-wind', 'north-wind', 'west-wind', 'west-wind', 'west-wind', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="120"
            name="Dai Sanfu"
            label="3 Triplets/Quad Winds"
            type="1-9-honors"
          />
          <Pattern
            tiles={['north-wind', 'north-wind', 'north-wind', 'west-wind', 'west-wind', 'west-wind', 'south-wind', 'south-wind', 'south-wind', 'Back', 'Back', 'Back', 'east-wind', 'east-wind']}
            score="320"
            name="ShoSushi"
            label="3 Triplets/Quad + pair Winds"
            type="1-9-honors"
          />
          <Pattern
            tiles={['east-wind', 'east-wind', 'east-wind', 'north-wind', 'north-wind', 'north-wind', 'west-wind', 'west-wind', 'west-wind', 'south-wind', 'south-wind', 'south-wind', 'Back', 'Back']}
            score="400"
            name="Daisushi"
            label="4 Triplets Winds"
            type="1-9-honors"
          />
        </div>

        <Pattern
          tiles={['north-wind', 'north-wind', 'north-wind', 'south-wind', 'south-wind', 'south-wind', 'white-dragon', 'white-dragon', 'white-dragon', 'east-wind', 'east-wind', 'east-wind', 'red-dragon', 'red-dragon' ]}
          score="320"
          name="Tsu Iso"
          label="Triplets all of Honors"
          type="1-9-honors"
        />
        <Pattern
          tiles={['4-sou', '4-sou', '4-sou', 'south-wind', 'south-wind', 'south-wind', '2-pin', '2-pin', '2-pin', '9-pin', '9-pin', '9-pin', 'Back', 'Back']}
          score="30"
          name="Toi Toi Ho"
          label="4 Triplet/Quad sets"
          type="tri"
        />

        <div className="Patterns-group Patterns-group--concealed">
          <Pattern
            tiles={['3-man', '3-man', '3-man', '4-pin', '4-pin', '4-pin', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="5"
            name="Ni Anko"
            label="2 concealed Triplet/Quad sets"
            type="tri"
          />
          <Pattern
            tiles={['3-man', '3-man', '3-man', '4-pin', '4-pin', '4-pin', '5-sou', '5-sou', '5-sou', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="30"
            name="San Anko"
            label="3 concealed Triplet/Quad sets"
            type="tri"
          />
          <Pattern
            tiles={['3-man', '3-man', '3-man', '4-pin', '4-pin', '4-pin', '5-sou', '5-sou', '5-sou', '7-pin', '7-pin', '7-pin', 'Back', 'Back']}
            score="125"
            name="Su Anko"
            label="4 concealed Triplet/Quad sets"
            type="tri"
          />
        </div>

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['6-man', '6-man', '6-man', '6-man', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="5"
            name="Ikkan Tsu"
            label="1 Quad set"
            type="quad"
          />
          <Pattern
            tiles={['6-man', '6-man', '6-man', '6-man', '2-pin', '2-pin', '2-pin', '2-pin', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="20"
            name="Ni Kan Tsu"
            label="2 Quad set"
            type="quad"
          />
          <Pattern
            tiles={['6-man', '6-man', '6-man', '6-man', '2-pin', '2-pin', '2-pin', '2-pin', '7-sou', '7-sou', '7-sou', '7-sou', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="120"
            name="San Kan Tsu"
            label="3 Quad set"
            type="quad"
          />
          <Pattern
            tiles={['6-man', '6-man', '6-man', '6-man', '2-pin', '2-pin', '2-pin', '2-pin', '7-sou', '7-sou', '7-sou', '7-sou', '8-man', '8-man', '8-man', '8-man', 'Back', 'Back']}
            score="480"
            name="Su Kan Tsu"
            label="4 Quad set"
            type="quad"
          />
        </div>

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['2-man', '3-man', '4-man', '2-man', '3-man', '4-man', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="10"
            name="Ipeiko"
            label="2 sets same Sequence, same suit"
            type="run"
          />
          <Pattern
            tiles={['4-pin', '5-pin', '6-pin', '4-pin', '5-pin', '6-pin', '1-man', '2-man', '3-man', '1-man', '2-man', '3-man',  'Back', 'Back']}
            score="60"
            name="Ryan Peiko"
            label="2 of (sets same Sequence)"
            type="run"
          />
          <Pattern
            tiles={['3-pin', '4-pin', '5-pin', '3-pin', '4-pin', '5-pin', '3-pin', '4-pin', '5-pin', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="120"
            name="Isshoku san dojun"
            label="3 same Sequence, same suit"
            type="run"
          />
          <Pattern
            tiles={['3-pin', '4-pin', '5-pin', '3-pin', '4-pin', '5-pin', '3-pin', '4-pin', '5-pin', '3-pin', '4-pin', '5-pin', 'Back', 'Back']}
            score="480"
            name="Isshoku su dojun"
            label="4 same Sequence, same suit"
            type="run"
          />
        </div>

        <Pattern
          tiles={['7-man', '8-man', '9-man', '7-sou', '8-sou', '9-sou', '7-pin', '8-pin', '9-pin', 'Back', 'Back', 'Back', 'Back', 'Back']}
          score="35"
          name="Sanshoku dojun"
          label="3 same Sequence, 3 diff suits"
          type="run"
        />

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['4-man', '4-man', '4-man', '4-sou', '4-sou', '4-sou', 'Back', 'Back', 'Back', 'Back', 'Back', 'Back', '4-pin', '4-pin']}
            score="30"
            name="Sanshoku Sho Doko"
            label="2 same Tri + pair, 3 diff. suits"
            type="tri"
          />
          <Pattern
            tiles={['4-man', '4-man', '4-man', '4-sou', '4-sou', '4-sou', '4-pin', '4-pin', '4-pin', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="120"
            name="Sanshoku Doko"
            label="3 same Triplets, 3 diff. suits"
            type="tri"
          />
        </div>

        <Pattern
          tiles={['1-pin', '2-pin', '3-pin', '4-pin', '5-pin', '6-pin', '7-pin', '8-pin', '9-pin', 'Back', 'Back', 'Back', 'Back', 'Back']}
          score="40"
          name="Ittsu"
          label="Straight 1-9 of one suit"
          type="run"
        />

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['1-pin', '1-pin', '1-pin', '2-pin', '2-pin', '2-pin', '3-pin', '3-pin', '3-pin', 'Back', 'Back', 'Back', 'Back', 'Back']}
            score="100"
            name="San ren ko"
            label="3 seq. Triplets, same suit"
            type="tri"
          />
          <Pattern
            tiles={['3-pin', '3-pin', '3-pin', '4-pin', '4-pin', '4-pin', '5-pin', '5-pin', '5-pin', '6-pin', '6-pin', '6-pin', 'Back', 'Back']}
            score="200"
            name="Suu ren ko"
            label="4 seq. Triplets, same suit"
            type="tri"
          />
        </div>

        <div className="Patterns-group Patterns-group--no-combo">
          <Pattern
            tiles={['north-wind', 'north-wind', 'north-wind', '7-pin', '8-pin', '9-pin', '1-sou', '2-sou', '3-sou', '1-pin', '1-pin', '1-pin', '9-sou', '9-sou']}
            score="40"
            name="Chantaiyo"
            label="All sets and pair with 1, 9 or Honors"
            type="1-9-honors"
          />
          <Pattern
            tiles={['1-man', '2-man', '3-man', '7-man', '8-man', '9-man', '1-pin', '2-pin', '3-pin', '9-sou', '9-sou', '9-sou', '1-pin', '1-pin']}
            score="50"
            name="Jun Chantaiyo"
            label="All sets and pair with 1, 9 · no Honors"
            type="1-9-honors"
          />
          <Pattern
            tiles={['9-man', '9-man', '9-man', '1-man', '1-man', '1-man', '1-pin', '1-pin', '1-pin', 'east-wind', 'east-wind', 'east-wind', '9-sou', '9-sou']}
            score="100"
            name="Honroto"
            label="4 Tri or 7 pair hand with 1, 9 or Honors"
            type="1-9-honors"
          />
          <Pattern
            tiles={['1-pin', '1-pin', '1-pin', '1-sou', '1-sou', '1-sou', '9-pin', '9-pin', '9-pin', '1-man', '1-man', '1-man', '9-man', '9-man']}
            score="400"
            name="Chinroto"
            label="4 Tri or 7 pair hand with 1, 9 · no Honors"
            type="1-9-honors"
          />
        </div>

        <div className="Patterns-group Patterns-group--concealed">
          <Pattern
            tiles={['8-sou', '8-sou', '5-pin', '5-pin', 'north-wind', 'north-wind', '4-sou', '4-sou', 'red-dragon', 'red-dragon', '8-pin', '8-pin', '1-sou', '1-sou']}
            score="30"
            name="ChiToitsu"
            label="7 pairs · Dupes OK if not melded Quad"
            type="irregular"
          />
        </div>

        <div className="Patterns-group Patterns-group--concealed">
          <Pattern
            tiles={['1-pin', '9-pin', '1-man', '9-man', '1-sou', '9-sou', 'white-dragon', 'green-dragon', 'red-dragon', 'east-wind', 'north-wind', 'south-wind', 'west-wind', 'west-wind']}
            score="160"
            name="Shisan Yaochu"
            label="13 orphans : 1ea of all Honors, 1 & 9s"
            type="irregular"
          />
        </div>
      </div>
    );
  }
}


export default Patterns;
