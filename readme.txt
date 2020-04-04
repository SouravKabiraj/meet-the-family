Problem Name - Meet The Family
- Basic Entities like Human, Man, Woman, Married Woman etc are kept under [Members] module
- Relationship handler are there to find the relatives
- Implemented Facade design pattern [FamilyFacade] to interact with Family sub-system.
- Implemented Builder classes [ManBuilder], [WomanBuilder], [FamilyFacadeBuilder] to do initial setup and quick object creation.
- Implemented Command design pattern to handle input commands.
- As Undo command is not there in the given use case, It is [NotImplemented].

User Manual
- Setup : npm i && npm run compile
- Input : Modify ./Input/Input.txt with proper data
- Run   : npm start
- Output: Open Output/Output.txt
