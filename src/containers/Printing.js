import React from 'react';

import Image from '../components/tutorials/ImageAlbum';

import anet1 from "../images/anet_placeholder2.jpg";
import anet2 from "../images/anet_placeholder.jpg";

import prints1 from '../images/3D_Prints/Bike Handle - Key (1).jpg';
import prints2 from '../images/3D_Prints/Bike Handle - Key (2).jpg';
import prints3 from '../images/3D_Prints/Bike Handle - Key (3).jpg';
import prints4 from '../images/3D_Prints/Bike Handle - Key (4).jpg';
import prints5 from '../images/3D_Prints/Bike Handle - Key (5).jpg';
import prints6 from '../images/3D_Prints/Bike Handle - Key (6).jpg';
import prints7 from '../images/3D_Prints/Bike Handle - Money Stash (1).jpg';
import prints8 from '../images/3D_Prints/Bike Handle - Money Stash (2).jpg';
import prints9 from '../images/3D_Prints/Bike Handle - Money Stash (3).jpg';
import prints10 from '../images/3D_Prints/Bike Handle - Money Stash (4).jpg';
import prints11 from '../images/3D_Prints/Bike Handle - Money Stash (5).jpg';
import prints12 from '../images/3D_Prints/Bike Handle - Money Stash (6).jpg';

import styles from '../css/Printing.scss';

export default class Printing extends React.Component {

  render() {
    return (
      <div styles={styles} className="printing">
        <h2>3D Printing</h2>
          <p>I recently bought an Anet A8 and I've been trying to design losts of different prototypes, some to solve minor problems around the house, some as a technical test of my CAD skills and of the 3D printers limiations.</p>
        <h2>The Printer</h2>
          <p>I print using an Anet A8 I bought for around £125 from banggood.com, It is about as basic a printer as you can get without desigining it yourself,
             however i've been able to get print quality matching that of other FDM 3D Printers several times more expensive by making / printing a few improvements to the printer.
          </p>
          <Image src={[anet1,anet2]} description="pictured above: Stock Anet A8"/>
          <p> This is the first 3D printer i've owned, although i did get the opportunity to use some in the Engineering Department of my University as part of my Engineering Degree,
            so I did have more experience than most.<br/>
            <br/>
            The A8 is shipped as a 'kit' so it required assembly, which was not particularly difficult as the included instructions were clear and the layout of the printer is quite straightforward,
            the build took 4-5 hours.
            <br/>
            <br/><a href="index.html#!/3D_Printing#Upgrades">Upgrades I've made.</a>
          </p>


        <h2>My Designs</h2>
        <p>All of my designs will be hosted on my <a className="prettylink" href="https://thingiverse.com/JackGooding">Thingiverse</a> account, however here is a brief list of my favourite designs.</p>
          <div className="CAD-container">
          <table>
            <tr>
              <td>
                <p className="CAD-title">Key Holder</p>
              </td>
              <td>
                <div className="img-container lightbox-target img-zoom"><img alt="" className="show-more" src="components/3D Design\KeyHolder6.PNG"/><img alt="" className="show-more" src="components/3D Design\PintGlassAdapter1.PNG" style={{display:"none"}}/></div>
              </td>
              <td>
                <p>The general idea of this is to have a swiss army knife to stop my keys jingling, keep my USB from being further dented or scratched, and to have a small multi-purpose container that I'd have 24/7.
                  <br/>So far I have spaces for three standard keys, <a className="prettylink" href="http://amzn.eu/iLHGUjj" target="_blank" rel="noopener noreferrer">a Kingston USB</a>, a flathead & phillips hex insert, and two barcodes for store membership cards.
                  <br/>I plan for the container to hold at minimum; some aspirin, a needle and thread, and some matches.</p>
              </td>
              <td>
                <a href="https://www.thingiverse.com/JackGooding" target="_blank" rel="noopener noreferrer"><img  className="ref-icon" src="./static/thingiverse.png" alt="Thingiverse"/></a>
              </td>
            </tr>
            <tr>
              <td><p  className="CAD-title">Pint Glass Adapter</p></td>
              <td><div className="img-container lightbox-target img-zoom" ><img alt="" src="components/3D Design\PintGlassAdapter1.PNG"/></div></td>
              <td><p>
                I won a Pint glass in a competition at work recently, however we are advised against using open topped containers so I designed this adapter to convert it into a travel mug.
                <br/> It's printed in two parts, one of which slides up the outside, and the other clamps over the top once threaded together.
                <br/> A thin layer of sheet rubber cut to the right size provides a watertight seal between the rim of the glass and the printed part.
              </p></td>
              <td></td>

            </tr>
            <tr>
              <td><p  className="CAD-title">Blind Control Gears</p></td>
              <td><div className="img-container lightbox-target img-zoom"><img  src="./static/3D_Prints/Bike Handle - Key (1).jpg" alt="Bike Handle - Key (1).jpg"/></div></td>
              <td><p>
                A friend recently asked me to print a replacement end cap for his bike handle bars, to which i thought i would add on something useful.
                <br/>I designed a slot to hold their bike lock key, which they could <i>relatively</i> safely store a replacement key in case they lost theirs.
                <br/>It fits both my bike key and theirs, and would be trivially easy to modify for a different dimensioned key.
              </p></td>
              <td></td>

            </tr>
            <tr>
              <td><p  className="CAD-title">Door Hook Spacer</p></td>
              <td><div className="img-container lightbox-target img-zoom"><img alt="" src="components/3D Design\DoorSpacer1.PNG"/></div></td>
              <td><p>
                I have a set of over-door hooks which are too large for the doors in my new house, which means they catch on the door frame when closing the door.
                <br/> This part slots into a gap in the hook to make up for the door being to thin.
              </p></td>
              <td></td>

            </tr>
            <tr>
              <td><p  className="CAD-title">Keyboard Volume Dial</p></td>
              <td><div className="img-container lightbox-target img-zoom"><img alt="" src="components/3D Design\KeyboardDial1.PNG"/></div></td>
              <td><p> Many years ago I inherited a fairly decent Keyboard, with a missing volume dial. The dial stem still worked, it was just quite fiddly.
                <br/>This is just a simple circular block to fit onto the dial stem with a good grip around the outside edge.</p></td>
              <td></td>

            </tr>
          </table>

        </div>
        <h2>My Prints</h2>

        <Image src={[prints1,prints2,prints3,prints4,prints5,prints6,prints7,prints8,prints9,prints10,prints11,prints12]}></Image>

      <h3 id="Upgrades">Upgrades</h3>
      <p>I've made several improvements to the stock A8, some printed and some purchased, most of these are to improve the quality of prints, the rest are to make using it easier or less noisesome.</p>

        <table className="table table-striped">
          <tr>
            <td>360' Blower Fan</td>
            <td></td>
            <td>Designed to give even airflow over the print head, this improves cooling and stops potential artifacts / dimensional inaccuracy due to contstant pressure on cooling filament.</td>
          </tr>
          <tr>
            <td>Glass Bed</td>
            <td></td>
            <td>Improves the first-layer quality and makes setup much easier.<br/>
              Glass by itself gives much lower bed adhesion than painters tape, however a thin layer of PVA glue will create a strong bond with a very smooth surface,
              or for ABS a thin layer of 'ABS Juice' works great.
              Glass also makes removing parts much easier when using PVA as the bed is removable and can be put under a warm tap to dissolve the PVA.
            </td>
          </tr>
          <tr>
            <td>X/Y Belt Tensioner</td>
            <td></td>
            <td>Tighter belts give less wiggle room for the part which results in cleaner, more accurate models.<br/>
              A Loose belt results in the print head moving past the intended stop point and makes the print head more succeptible to movement from wobble in the frame,
             translating to waves on the X/Y lines.
            </td>
          </tr>
          <tr>
            <td>Extruder Fan Mount</td>
            <td></td>
            <td>This is purely to make it easier to change filaments.
              <br/>
              To change filamanets, the screws holding the fan, heatsink, extruder block & stepper motor in place need to be unscrewed, and the filament fed into the extruder.
              With this upgrade, I can just swing the fan/heatsink away from the extruder block and have easy access to the extruder.
            </td>
          </tr>
          <tr>
            <td>Kettle/IEC Socket</td>
            <td></td>
            <td>Adding a socket to this printer is another QOL upgrade. As stock, you wire directly onto the included PSU as per the instructions, which works fine but looks dangerous and does leave 12V terminals exposed.
              This socket covers up exposed wires, and allows for removal of the power cable for easy transporting. It also has a switch which means I no longer have to turn the printer off at a wall socket
            </td>
          </tr>
          <tr>
            <td>Wooden Base</td>
            <td></td>
            <td>This doesn't benefit print quality in a direct way. Having a fixed base allows me to move the printer around much more easily, and gives an extra layer to reduce vibrational noise.
              Normally if you move an A8, you have to at least re-level the print bed, but this base prevents that.
            </td>
          </tr>
        </table>

        </div>
    );
  };
};
