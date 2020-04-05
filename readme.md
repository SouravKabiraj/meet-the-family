<H1>Problem Name - Meet The Family</H1>
<ol>
<li> Basic Entities like Human, Man, Woman, Married Woman etc are kept under [Members] module</li>
<li> Relationship handler are there to find the relatives</li>
<li> Implemented Facade design pattern [FamilyFacade] to interact with Family sub-system.</li>
<li> Implemented Builder classes [ManBuilder], [WomanBuilder], [FamilyFacadeBuilder] to do initial setup and quick object creation.</li>
<li> Implemented Command design pattern to handle input commands.</li>
<li> As Undo command is not there in the given use case, It is [NotImplemented].</li>
</ol>

<h3>User Manual</h3>
<ol>
<li> Setup : npm i && npm run compile</li>
<li> Input : Modify ./Input/Input.txt with proper data</li>
<li> Run   : npm start</li>
<li> Output: Open Output/Output.txt
</li>
</ol>
