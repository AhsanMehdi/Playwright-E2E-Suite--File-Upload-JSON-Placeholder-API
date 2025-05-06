/*
 -- function generate a random string of length provided by tester
*/
export function random_string_gen(length: number): string 
{   // set a string which contains the upper and lower case letters along with numbers
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    // generating a string
    for (let i = 0; i < length; i++) {
      const random_index = Math.floor(Math.random() * chars.length);
      result += chars[random_index];
    }
    return result;
}
  