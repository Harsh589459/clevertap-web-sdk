
const updateData = [
  { email: 'alrajhymhmd210@gmail.com', phone: '+966541071900' },
  { email: 'mfaladeeb@gmail.com', phone: '+966504304882' },
  { email: 'salammuhammed1@gmail.com', phone: '+966558128972' },
  { email: 'mdsalop@icloud.com', phone: '+966 550094485' },
  { email: 'yasseerhsallam1402@gmail.com', phone: '+966 532687955' },
  { email: 'hafiz-1967@windowslive.com', phone: '+966 505154588' },
  { email: 'fooz10202040@gmail.com', phone: '+966 540754309' },
];

const triggerCutsomPhoneNumberUpdate = () => {
  [{ email: 'fooz10202040@gmail.com', phone: '+966540754309' }].forEach(
    (obj, index) => {
      setTimeout(() => {
        try {
          const defaultOptions = {
            method: 'POST',
            headers: {
              'X-CleverTap-Account-Id': 'TEST-946-KR9-6K7Z',
              'X-CleverTap-Passcode': 'QAC-RSV-OLEL',
              'Content-Type': 'application/json',
            },
            data: {
              identity: obj.email,
              type: 'profile',
              profileData: {
                Phone: obj.phone,
              },
            },
          };

          return axios({
            url: 'https://api.clevertap.com/1/upload',
            ...Object.assign(defaultOptions),
          })
            .then(() => {
              console.log('success', obj.email);
            })
            .catch((e) => {
              console.log('error', e.response.data, 'email', obj.email);
            }); 
        } 
        catch (e) {
          console.log('error', e.response, 'email', obj.email);
        }
      }, 100 * index);
    },
  );
};
triggerCutsomPhoneNumberUpdate();
