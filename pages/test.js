{/* musical slider */}
<Box>
<Slider {...settings}>
  {dataMusical.map((item, index) => (
    <Box key={index} px={3}>
      <Card   
        h="50px"
        borderWidth="0"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          w={{ base: "100%" }}
          h="20px"
        >
          <Image
            src={item.image}
            alt={item.title}

          />
        </Box>
        <CardHeader h="30px" mb={5}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "80%",
            }}
          >
            {item.title}
          </Text>
        </CardHeader>
        <CardBody h="160px">
          <Text fontSize="md">
            {item.description}
          </Text>
        </CardBody>
        {/* <Link href="./reservation"> */}
        <Button
          onClick={() => handleReservation(item.id)}>
          예매하기
        </Button>
      </Card>
    </Box>
  ))}
</Slider>
</Box>