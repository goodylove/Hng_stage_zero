const getBasicInfo = async (req, res) => {
  const currentDateTime = new Date().toISOString();

  const BasicInfo = {
    email: "goodyc474@gmail.com",
    current_datetime: currentDateTime,
    github_url: "https://github.com/goodylove/Hng-_stage-_zero",
  };
  res.status(200).json(BasicInfo);
};

module.exports = getBasicInfo;
