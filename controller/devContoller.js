const getBasicInfo = async (res, req) => {
  const currentDateTime = new Date().toISOString();

  const BasicInfo = {
    email: "goodyc474@gmail.com",
    current_datetime: currentDateTime,
    github_url: "",
  };
  res.status(200).json(BasicInfo);
};

module.exports = getBasicInfo;
