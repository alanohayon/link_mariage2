const fs = require('fs');

const path = '/Users/alanohayon/Desktop/link_mariage2/src/components/RSVPForm.jsx';
let content = fs.readFileSync(path, 'utf8');

// The replacement content
const targetRegex = /adults: Number\(formData\.adults\) \|\| 1,\s*children: Number\(formData\.children\) \|\| 0,\s*email: formData\.email \|\| "",\s*submittedAt: new Date\(\)\.toISOString\(\),/g;

let replaceText = `adults: formData.attending === "Oui" ? (Number(formData.adults) || 1) : null,
          children: formData.attending === "Oui" ? (Number(formData.children) || 0) : null,
          email: formData.attending === "Oui" ? formData.email : null,
          submittedAt: new Date().toISOString(),`;

content = content.replace(/adults: Number\(formData.adults\) \|\| 1,\s*children: Number\(formData.children\) \|\| 0,\s*submittedAt: new Date\(\)\.toISOString\(\),/g, replaceText);

fs.writeFileSync(path, content, 'utf8');
console.log("File updated!")
