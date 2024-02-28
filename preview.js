document.getElementById("fileInput").addEventListener("change", handleFile);

async function handleFile(event) {
  const file = event.target.files[0];
  if (!file) {
    console.error("No file selected.");
    return;
  }
  const fileReader = new FileReader();
  fileReader.onload = async function (event) {
    const fileContent = event.target.result;
    // console.log("File contents:", fileContent);

    const preview = document.getElementById("preview");
    preview.value = fileContent;

    const sendButton = document.querySelector("button");
    sendButton.addEventListener("click", async () => {
      const messages = fileContent.trim().split("\n");
      const recipients = [
        "aishwaryaadhikari675@gmail.com",
        "aiswaryapokharel@gmail.com",
        "Khatiwadahemant0@gmail.com",
        "amritrajbanshi824@gmail.com",
        "anilthapa9816954452@gmail.com",
        "akhanal749@gmail.com",
        "ashishrajbhandari03@gmail.com",
        "mickmaargurung@gmail.com",
        "bhuwansangroula588@gmail.com",
        "kingofdon333@gmail.com",
        "cyruskafle005@gmail.com",
        "dipsankadariya99@gmail.com",
        "hridayadev.dhungana@gmail.com",
        "kishorparajuli205@gmail.com",
        "nabinbhattarai214@gmail.com",
        "reaperneeraj@gmail.com",
        "nirmaldahal19@gmail.com",
        "nxhettry2003@gmail.com",
        "pawankhamdak@gmail.com",
        "pawannepal760@gmail.com",
        "prabeshnepal0@gmail.com",
        "aatrayaprabidhi@gmail.com",
        "prajinaadhikari5@gmail.com",
        "prastavshrestha6@gmail.com",
        "richaadhikari452@gmail.com",
        "ritesh208318@gmail.com",
        "maiyaadhikari2017@gmail.com",
        "roshannpl1234r@gmail.com",
        "roshc10grg@gmail.com",
        "sameshayonghang151@gmail.com",
        "samitatimsina910@gmail.com",
        "saurab57322@gmail.com",
        "mrpurisujan@gmail.com",
        "shuvamy9@gmail.com",
        "fikschimariya111@gmail.com"
    ];   
      const filteredRecipients = recipients.filter(recipient => recipient.trim() !== "");

      const numRecipients = Math.min(filteredRecipients.length, messages.length);

      for (let i = 0; i < numRecipients; i++) {
        const recipient = filteredRecipients[i];
        const messageToSend = messages[i].trim();

        try {
          const response = await fetch("http://localhost:2999/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recipient: recipient,
              message: messageToSend,
            }),
          });
          const result = await response.json();
          console.log(`Message sent to ${recipient}:`, result);
        } catch (error) {
          console.error(`Error sending message to ${recipient}:`, error);
        }
      }
    });
  };
  fileReader.readAsText(file);
}
