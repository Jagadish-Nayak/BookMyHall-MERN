const InstitutionList = {
  NITRKL: 'National Institute of Technology, Rourkela',
  SM : 'School of Management, NIT Rourkela',
  SAC : 'Student Activity Centre',
  KV : 'Kendriya Vidyalaya, NIT Rourkela',
  CDC: 'Career Development Cell',
  // Add more institution mappings as needed
};

const DepartmentList = {
  BM: 'Bio Medical Engineering',
  BT: 'Bio Tech Engineering',
  CE: 'Civil Engineering',
  CH: 'Chemical Engineering',
  CR: 'Ceramic Engineering',
  CSE: 'Computer Science & Engineering',
  ECE: 'Electronics & Communication Engineering',
  EE: 'Electrical Engineering',
  EIE: 'Electrical and Instrumentation Engineering',
  FP: 'Food Processing Engineering',
  ID: 'Industrial Design Engineering',
  ME: 'Mechanical Engineering',
  MM: 'Metallurgy and Material Engineering',
  MN: 'Mining Engineering',
  MA: 'Integrated Mathematics',
  CY: 'Integrated Chemistry',
  LS: 'Life Science',
  PH: 'Physics',
  HS: 'Humanities',
  CDC: 'Career Development Cell',
  PLACEMENT: 'Placement',
  TRAINING: 'Training',
  LCS: 'Literary & Cultural Society',
  GSS: 'Games & Sports Society',
  TS: 'Technical Society',
  FMS: 'Film & Music Society',
  MATHS: 'Mathematics',
  SCIENCE: 'Science',
  ENGLISH: 'English',
  HINDI: 'Hindi',
  SSC : 'Social Science',
  SANSKRIT : 'Sanskrit',
  MBA: 'MBA',
  // Add more department mappings as needed
};

const institutions = [
  {
    name: InstitutionList['NITRKL'],
    departments: [
      DepartmentList['BM'],
      DepartmentList['BT'],
      DepartmentList['CE'],
      DepartmentList['CH'],
      DepartmentList['CR'],
      DepartmentList['CSE'],
      DepartmentList['ECE'],
      DepartmentList['EE'],
      DepartmentList['EIE'],
      DepartmentList['FP'],
      DepartmentList['ID'],
      DepartmentList['ME'],
      DepartmentList['MM'],
      DepartmentList['MN'],
      DepartmentList['MA'],
      DepartmentList['CY'],
      DepartmentList['LS'],
      DepartmentList['PH'],
      DepartmentList['HS'],
    ],
  },
  {
    name: InstitutionList['SM'],
    departments: [
      DepartmentList['MBA'],
    ],
  },
  {
    name: InstitutionList['SAC'],
    departments: [
      DepartmentList['LCS'],
      DepartmentList['TS'],
      DepartmentList['GSS'],
      DepartmentList['FMS'],
    ],
  },
  {
    name: InstitutionList['KV'],
    departments: [
      DepartmentList['MATHS'],
      DepartmentList['SCIENCE'],
      DepartmentList['ENGLISH'],
      DepartmentList['HINDI'],
      DepartmentList['SANSKRIT'],
      DepartmentList['SSC'],
    ],
  },
  {
    name: InstitutionList['CDC'],
    departments: [
      DepartmentList['CDC'],
      DepartmentList['PLACEMENT'],
      DepartmentList['TRAINING'],
    ],
  },
  // Add more institutions based on InstitutionList mappings as needed
];

export { institutions, InstitutionList, DepartmentList };
