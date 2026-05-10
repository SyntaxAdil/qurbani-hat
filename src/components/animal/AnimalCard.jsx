import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import {
  MotionDiv,
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerItemVariants,
} from "../../components/ui/MotionDiv";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  const { id, name, price, type, weight, description, image, location, age } =
    animal;

  return (
    <MotionDiv
      variants={staggerItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0 shadow-md hover:shadow-xl transition-all duration-300">
        {/* Image Section */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Badge */}
          <div className="absolute left-3 top-3 z-20">
            <Badge variant="secondary">{type}</Badge>
          </div>
        </div>

        {/* Content */}
        <CardHeader>
          <CardTitle className="text-lg font-bold">{name}</CardTitle>

          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Info */}
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <MotionDiv
            variants={fadeInLeftVariants}
            className="flex justify-between"
          >
            <span>ওজন:</span>
            <span className="font-medium text-foreground">{weight} kg</span>
          </MotionDiv>

          <MotionDiv
            variants={fadeInRightVariants}
            className="flex justify-between"
          >
            <span>বয়স:</span>
            <span className="font-medium text-foreground">{age} বছর</span>
          </MotionDiv>

          <MotionDiv
            variants={fadeInLeftVariants}
            className="flex justify-between"
          >
            <span>লোকেশন:</span>
            <span className="font-medium text-foreground">{location}</span>
          </MotionDiv>

          <div className="flex justify-between pt-2 border-t">
            <span>দাম:</span>
            <span className="text-lg font-bold text-primary">
              ৳ {price.toLocaleString()}
            </span>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter>
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Link href={`/animal/${id}`}>
              <Button className="w-full">বিস্তারিত দেখুন</Button>
            </Link>
          </MotionDiv>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
};

export default AnimalCard;
