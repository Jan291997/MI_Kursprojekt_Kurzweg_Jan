# MI Kursprojekt von Kurzweg Jan - Interior Designer
In order to make virtual and augmented reality tangible in a browser application, the **Interior Designer** puts furnishings such as a table or chair in a 3D simulated room. The room can be freely selected by the user.
The pieces of furniture can then be moved by holding down the middle mouse button, rotating them around the Y-axis with the left mouse button and rotating them around the X-axis with the right mouse button.
## Hosting
The easiest way to use the program is to simply call up the hosted program under the following link.
https://editor.p5js.org/JanK/present/dka6xqR2Q  or  https://jan291997.github.io/MI_Kursprojekt_Kurzweg_Jan/
Alternatively, the program can be opened in the Processing IDE. You have to install the p5.js mode in Processing with *Sketch -> library import -> modes -> p5js mode* and activate it in the editor at the top right.
To be able to run the simulator without the processing IDE locally, a local web server is required, which can be created with auxiliary programs of your choice, such as *python3* or *XAMPP*.
## Usage
In order to use the simulator, an image should be selected that shows the room.
For this you can enter the file path as text or use the button to upload files.
If no picture is selected, a drawn sample image is used.
For good results, the image should be in the **1080px by 720px** format.
You can already see a fully functional preview of the furniture even without a picture if you select it on the control bar at the bottom of the screen.

After starting the simulator by pressing the start button, the image of the room opens and you can select the furniture in the control bar at the bottom of the screen. You can now move the piece of furniture in the room with the middle mouse button pressed. To turn the piece of furniture around the x axis you have to hold down the left mouse button, for the Y axis the right one. The size can be changed with the slider. It should be noted that these are not absolute coordinates and thus the rotations influence each other.

The current piece of furniture can be reset at any time with the button at the bottom right *reset*.
To exit the simulation, the cross at the top right of the picture can be used to close.
