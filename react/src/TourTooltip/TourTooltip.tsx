import { Box, BoxProps, CloseButton, Flex, Icon, Text } from '@chakra-ui/react'

import { Badge } from '~/Badge'
import { Button, ButtonProps } from '~/Button'
import { ProgressIndicator } from '~/ProgressIndicator'

import { BxBulb, BxRightArrowAlt } from '..'

import { useTourContext } from './TourContext'

export interface FeatureTourStep {
  content: React.ReactNode
  title?: React.ReactNode
}

export interface TourTooltipProps {
  step: FeatureTourStep
  tooltipProps: BoxProps
  primaryProps: ButtonProps
  closeProps: ButtonProps
  isLastStep: boolean
  index: number
}

export const TourTooltip = ({
  step,
  tooltipProps,
  primaryProps,
  closeProps,
  isLastStep,
  index,
}: TourTooltipProps): JSX.Element => {
  const { paginationCallback } = useTourContext()
  const { steps } = useTourContext()
  console.log('STEPS:', steps)
  return (
    <Box
      padding="1.5rem"
      alignItems="center"
      maxW="100%"
      w="18rem"
      color="secondary.500"
      bg="primary.100"
      borderRadius="4px"
      {...tooltipProps}
      position="relative"
    >
      <CloseButton
        variant="clear"
        colorScheme="neutral"
        position="absolute"
        right="1.25rem"
        top="1.25rem"
        {...closeProps}
      />
      <Badge
        colorScheme="success"
        variant="solid"
        display="flex"
        width="fit-content"
      >
        <Icon as={BxBulb} mr="0.25rem" fontSize="1rem" />
        <Text textStyle="caption-1">Tip</Text>
      </Badge>
      <Text textStyle="subhead-1" color="secondary.500" marginTop="1.25rem">
        {step.title}
      </Text>
      <Text textStyle="body-2" color="secondary.500" marginTop="0.5rem">
        {step.content}
      </Text>
      <Flex
        flexDirection="row"
        marginTop="2.5rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <ProgressIndicator
          numIndicators={steps.length}
          currActiveIdx={index}
          onClick={paginationCallback}
        />
        {isLastStep ? (
          <Button {...primaryProps} title="Done">
            Done
          </Button>
        ) : (
          <Button rightIcon={<BxRightArrowAlt />} {...primaryProps}>
            Next
          </Button>
        )}
      </Flex>
    </Box>
  )
}
