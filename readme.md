<H1>Problem Name - Meet The Family</H1>
<ol>
<li> Basic Entities like Human, Man, Woman, Married Woman etc are kept under <b>[Members]</b> module</li>
<li> Relationship handler are there to find the relatives</li>
<li> Implemented Facade design pattern <b>[FamilyFacade]</b> to interact with Family sub-system.</li>
<li> Implemented Builder classes <b>[ManBuilder],</b> <b>[WomanBuilder],</b> <b>[FamilyFacadeBuilder]</b> to do initial setup and quick object creation.</li>
<li> Implemented Command design pattern to handle input commands.</li>
<li> As Undo command is not there in the given use case, It is <b>[NotImplemented].</b></li>
</ol>

<h3>User Manual</h3>
<ol>
<li> Setup : <b>gulp build</b></li>
<li> Input : Modify <b>./Input/Input.txt</b> with proper data</li>
<li> Run   : <b>npm start</b></li>
<li> Output: Open Output/Output.txt
</li>
</ol>

<i>This application is developed in node version v10.16.3</i>
